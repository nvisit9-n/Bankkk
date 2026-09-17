import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  Auth
} from 'firebase/auth';
import { doc, setDoc, Firestore } from 'firebase/firestore';
import { UserProfile } from '../types';
import { app, auth, db } from '../firebase';

export class FirebaseAuthService {
  static getAuthInstance(): Auth {
    return auth;
  }

  static getFirestoreInstance(): Firestore {
    return db;
  }

  /**
   * Save user profile directly to Firestore users collection
   */
  static async saveUserToFirestore(profile: UserProfile): Promise<boolean> {
    return this.syncUserProfileToFirestore(profile);
  }

  /**
   * Synchronize user profile directly to Firestore `users` collection
   */
  static async syncUserProfileToFirestore(profile: UserProfile): Promise<boolean> {
    try {
      const uid = profile.authUid || profile.id;
      if (!uid) return false;
      const firestore = this.getFirestoreInstance();
      if (!firestore) return false;

      const userDocRef = doc(firestore, 'users', uid);
      const isEmailAdmin = Boolean(profile.email && profile.email.toLowerCase().includes('admin'));

      const firestorePayload = {
        id: uid,
        name: profile.displayName || profile.name || 'विद्यार्थी',
        displayName: profile.displayName || profile.name || 'विद्यार्थी',
        email: profile.email || '',
        provider: profile.authProvider || 'google',
        photoURL: profile.photoURL || profile.avatarUrl || '',
        role: isEmailAdmin ? 'admin' : (profile.role || 'student'),
        xp: profile.xp || 250,
        totalLogins: (profile.totalLogins || 0) + 1,
        quizzesAttempted: profile.quizzesCompleted || 0,
        questionsSolved: profile.questionsSolved || 0,
        accuracy: profile.accuracy || 100,
        targetExam: profile.targetExam || 'नेपाल राष्ट्र बैंक (NRB) - सहायक ४',
        province: profile.province || 'बागमती प्रदेश',
        district: profile.district || 'काठमाडौं',
        lastLoginAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdAt: profile.registeredAt || new Date().toISOString()
      };

      // Wrap in 3-second safety promise
      await Promise.race([
        setDoc(userDocRef, firestorePayload, { merge: true }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Firestore sync timed out')), 3000))
      ]);
      return true;
    } catch (err) {
      console.warn('Firestore user profile sync warning (proceeding with local session):', err);
      return false;
    }
  }

  /**
   * Real Google OAuth Pop-up authentication with Firebase Auth
   */
  static async signInWithGoogle(): Promise<UserProfile> {
    const authInst = this.getAuthInstance();
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.setCustomParameters({ prompt: 'select_account' });

    const result = await signInWithPopup(authInst, provider);
    const fbUser = result.user;

    const email = fbUser.email?.toLowerCase().trim() || '';
    const displayName = fbUser.displayName?.trim() || email.split('@')[0] || 'परीक्षार्थी';
    const photoURL = fbUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`;
    const uid = fbUser.uid || `usr_${Date.now()}`;

    const profile: UserProfile = {
      id: uid,
      authUid: uid,
      authProvider: 'google',
      isGoogleUser: true,
      name: displayName,
      displayName,
      email,
      photoURL,
      avatarUrl: photoURL,
      phone: fbUser.phoneNumber || '',
      province: 'बागमती प्रदेश',
      district: 'काठमाडौं',
      targetExam: 'नेपाल राष्ट्र बैंक - सहायक (तह ४)',
      xp: 250,
      level: 1,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      registeredAt: new Date().toISOString(),
      questionsSolved: 0,
      quizzesCompleted: 0,
      accuracy: 100,
      rank: 'तह ४: नयाँ प्रतियोगी (Aspirant)',
      isRegistered: true,
      isGuest: false,
      profileCompletion: 85,
      hasReceivedCompletionBonus: false
    };

    // Synchronize user profile directly to Firestore `users` collection in background
    this.syncUserProfileToFirestore(profile).catch(() => {});

    return profile;
  }

  /**
   * Email/Password Sign-In
   */
  static async signInWithEmail(email: string, pass: string): Promise<UserProfile> {
    const authInst = this.getAuthInstance();
    const cleanEmail = email.trim().toLowerCase();

    const result = await signInWithEmailAndPassword(authInst, cleanEmail, pass);
    const fbUser = result.user;

    const displayName = fbUser.displayName?.trim() || cleanEmail.split('@')[0] || 'विद्यार्थी';
    const photoURL = fbUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`;
    const uid = fbUser.uid;

    const profile: UserProfile = {
      id: uid,
      authUid: uid,
      authProvider: 'email',
      isGoogleUser: false,
      name: displayName,
      displayName,
      email: cleanEmail,
      photoURL,
      avatarUrl: photoURL,
      phone: fbUser.phoneNumber || '',
      province: 'बागमती प्रदेश',
      district: 'काठमाडौं',
      targetExam: 'नेपाल राष्ट्र बैंक - सहायक (तह ४)',
      xp: 150,
      level: 1,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      registeredAt: new Date().toISOString(),
      questionsSolved: 0,
      quizzesCompleted: 0,
      accuracy: 100,
      rank: 'तह ४: नयाँ प्रतियोगी (Aspirant)',
      isRegistered: true,
      isGuest: false,
      profileCompletion: 70,
      hasReceivedCompletionBonus: false
    };

    // Synchronize to Firestore
    this.syncUserProfileToFirestore(profile).catch(() => {});

    return profile;
  }

  /**
   * Email/Password Sign-Up
   */
  static async signUpWithEmail(name: string, email: string, pass: string, targetExam?: string): Promise<UserProfile> {
    const authInst = this.getAuthInstance();
    const result = await createUserWithEmailAndPassword(authInst, email.trim().toLowerCase(), pass);
    const fbUser = result.user;

    const cleanEmail = fbUser.email?.toLowerCase().trim() || email.toLowerCase().trim();
    const cleanName = name.trim() || cleanEmail.split('@')[0] || 'नयाँ परीक्षार्थी';
    const photoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=0B2046&color=fff&size=256`;
    const uid = fbUser.uid;

    const profile: UserProfile = {
      id: uid,
      authUid: uid,
      authProvider: 'email',
      isGoogleUser: false,
      name: cleanName,
      displayName: cleanName,
      email: cleanEmail,
      photoURL,
      avatarUrl: photoURL,
      phone: '',
      province: 'बागमती प्रदेश',
      district: 'काठमाडौं',
      targetExam: targetExam || 'नेपाल राष्ट्र बैंक (NRB) - सहायक ४',
      xp: 200,
      level: 1,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      registeredAt: new Date().toISOString(),
      questionsSolved: 0,
      quizzesCompleted: 0,
      accuracy: 100,
      rank: 'तह ४: नयाँ प्रतियोगी (Aspirant)',
      isRegistered: true,
      isGuest: false,
      profileCompletion: 80,
      hasReceivedCompletionBonus: false
    };

    // Synchronize to Firestore users collection in real-time
    this.syncUserProfileToFirestore(profile).catch(() => {});

    return profile;
  }

  /**
   * Send Password Reset Link
   */
  static async sendPasswordReset(email: string): Promise<void> {
    const authInst = this.getAuthInstance();
    await sendPasswordResetEmail(authInst, email.trim().toLowerCase());
  }

  /**
   * Sign Out
   */
  static async signOutUser(): Promise<void> {
    try {
      const authInst = this.getAuthInstance();
      await signOut(authInst);
    } catch (e) {
      console.warn('Firebase sign out error:', e);
    }
  }

  /**
   * Listen to Firebase Auth state changes
   */
  static onAuthStateChanged(callback: (user: UserProfile | null) => void): () => void {
    const authInst = this.getAuthInstance();
    return onAuthStateChanged(authInst, (fbUser) => {
      if (fbUser && fbUser.email) {
        const cleanEmail = fbUser.email.toLowerCase().trim();
        const displayName = fbUser.displayName?.trim() || cleanEmail.split('@')[0] || 'परीक्षार्थी';
        const photoURL = fbUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=256`;
        const uid = fbUser.uid;

        const profile: UserProfile = {
          id: uid,
          authUid: uid,
          authProvider: (fbUser.providerData?.[0]?.providerId === 'google.com' ? 'google' : 'email') as any,
          isGoogleUser: fbUser.providerData?.[0]?.providerId === 'google.com',
          name: displayName,
          displayName,
          email: cleanEmail,
          photoURL,
          avatarUrl: photoURL,
          phone: fbUser.phoneNumber || '',
          province: 'बागमती प्रदेश',
          district: 'काठमाडौं',
          targetExam: 'नेपाल राष्ट्र बैंक - सहायक (तह ४)',
          xp: 250,
          level: 1,
          streak: 1,
          lastActiveDate: new Date().toISOString().split('T')[0],
          registeredAt: new Date().toISOString(),
          questionsSolved: 0,
          quizzesCompleted: 0,
          accuracy: 100,
          rank: 'तह ४: नयाँ प्रतियोगी (Aspirant)',
          isRegistered: true,
          isGuest: false,
          profileCompletion: 85,
          hasReceivedCompletionBonus: false
        };

        callback(profile);
      } else {
        callback(null);
      }
    });
  }
}
