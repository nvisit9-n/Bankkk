/**
 * Security Sanitization & Storage Integrity Utility
 * Prevents Cross-Site Scripting (XSS), script injection, and corrupted storage states.
 */

import { UserProfile } from '../types';

/**
 * Strips HTML tags, script blocks, dangerous attributes, and javascript: protocols.
 */
export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags & content
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')   // Remove style tags & content
    .replace(/<[^>]+>/g, '')                                            // Strip remaining HTML tags
    .replace(/javascript:/gi, '')                                       // Remove javascript: URI
    .replace(/vbscript:/gi, '')                                         // Remove vbscript: URI
    .replace(/data:text\/html/gi, '')                                   // Remove data:html URI
    .replace(/on\w+="[^"]*"/gi, '')                                     // Remove inline event handlers
    .replace(/on\w+='[^']*'/gi, '')
    .trim();
}

/**
 * Escapes characters for safe DOM or text display.
 */
export function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Safely bounds and sanitizes numeric values, preventing NaN or null runtime crashes.
 */
export function sanitizeNumber(
  val: unknown, 
  fallback: number = 0, 
  min: number = 0, 
  max: number = Number.MAX_SAFE_INTEGER
): number {
  if (typeof val === 'number' && Number.isFinite(val)) {
    return Math.min(Math.max(val, min), max);
  }
  if (typeof val === 'string') {
    const parsed = Number(val);
    if (Number.isFinite(parsed)) {
      return Math.min(Math.max(parsed, min), max);
    }
  }
  return fallback;
}

/**
 * Sanitizes and validates an entire UserProfile object.
 */
export function sanitizeUserProfile(profile: Partial<UserProfile> | null | undefined): UserProfile {
  const safeId = profile?.id && typeof profile.id === 'string' ? sanitizeString(profile.id) : (profile?.authUid ? sanitizeString(profile.authUid) : `user-${Date.now()}`);
  const safeEmail = sanitizeString(profile?.email || '');
  const emailPrefix = safeEmail ? safeEmail.split('@')[0] : '';
  const safeName = sanitizeString(profile?.name || profile?.displayName || emailPrefix || 'विद्यार्थी');
  const safeDisplayName = sanitizeString(profile?.displayName || safeName || emailPrefix);
  const safePhone = sanitizeString(profile?.phone || '').replace(/[^\d+]/g, '');
  const safeProvince = sanitizeString(profile?.province || 'बागमती प्रदेश');
  const safeDistrict = sanitizeString(profile?.district || 'काठमाडौं');
  const safeTargetExam = sanitizeString(profile?.targetExam || 'नेपाल राष्ट्र बैंक - सहायक (तह ४)');
  const safeRank = sanitizeString(profile?.rank || 'तह ४: नयाँ प्रतियोगी (Aspirant)');

  // Validate avatarUrl and photoURL to prevent javascript: or malformed URLs
  let safePhotoURL = profile?.photoURL || profile?.avatarUrl;
  if (typeof safePhotoURL !== 'string' || 
      (!safePhotoURL.startsWith('http://') && 
       !safePhotoURL.startsWith('https://') && 
       !safePhotoURL.startsWith('data:image/'))) {
    safePhotoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(safeDisplayName || 'User')}&background=0D8ABC&color=fff&size=256`;
  }

  let safeAvatar = profile?.avatarUrl;
  if (typeof safeAvatar !== 'string' || 
      (!safeAvatar.startsWith('http://') && 
       !safeAvatar.startsWith('https://') && 
       !safeAvatar.startsWith('data:image/'))) {
    safeAvatar = safePhotoURL;
  }

  return {
    id: safeId,
    authUid: profile?.authUid || safeId,
    authProvider: profile?.authProvider || (profile?.isGoogleUser ? 'google' : 'email'),
    isGoogleUser: Boolean(profile?.isGoogleUser || profile?.authProvider === 'google'),
    name: safeName || 'विद्यार्थी',
    displayName: safeDisplayName,
    email: safeEmail,
    phone: safePhone,
    province: safeProvince,
    district: safeDistrict,
    targetExam: safeTargetExam,
    avatarUrl: safeAvatar,
    photoURL: safePhotoURL,
    xp: sanitizeNumber(profile?.xp, 150, 0, 1000000),
    streak: sanitizeNumber(profile?.streak, 1, 0, 3650),
    lastActiveDate: sanitizeString(profile?.lastActiveDate || new Date().toISOString().split('T')[0]),
    questionsSolved: sanitizeNumber(profile?.questionsSolved, 0, 0, 100000),
    quizzesCompleted: sanitizeNumber(profile?.quizzesCompleted, 0, 0, 50000),
    accuracy: sanitizeNumber(profile?.accuracy, 100, 0, 100),
    rank: safeRank,
    level: sanitizeNumber(profile?.level, 1, 1, 100),
    totalQuestionsAnswered: sanitizeNumber(profile?.totalQuestionsAnswered, 0, 0, 100000),
    notesRead: sanitizeNumber(profile?.notesRead, 0, 0, 10000),
    registeredAt: sanitizeString(profile?.registeredAt || new Date().toISOString()),
    isRegistered: Boolean(profile?.isRegistered ?? (profile?.isGuest ? false : Boolean(safeEmail))),
    isGuest: Boolean(profile?.isGuest || !safeEmail),
    sessionToken: profile?.sessionToken,
    profileCompletion: sanitizeNumber(profile?.profileCompletion, profile?.isGuest ? 20 : 50, 0, 100),
    hasReceivedCompletionBonus: Boolean(profile?.hasReceivedCompletionBonus),
    isPro: Boolean(profile?.isPro || profile?.isProUser || profile?.proStatus === 'active'),
    isProUser: Boolean(profile?.isPro || profile?.isProUser || profile?.proStatus === 'active'),
    proStatus: (profile?.proStatus || (profile?.isPro || profile?.isProUser ? 'active' : 'inactive')) as 'active' | 'inactive',
    proExpiresAt: profile?.proExpiresAt
  };
}

/**
 * Checks whether an email matches any designated official administrator account.
 */
export const AUTHORIZED_ADMIN_EMAILS = [
  'rishiramthapa3@gmail.com',
  'rishiramthapa30@gmail.com',
  'admin@bankingtayari.np'
];
export const OFFICIAL_ADMIN_EMAIL = 'rishiramthapa3@gmail.com';
export const MASTER_ADMIN_PIN = '1234';
export const FALLBACK_ADMIN_PIN = '885522';

export function isPinValid(inputPin?: string | null): boolean {
  if (!inputPin) return false;
  const clean = inputPin.trim();
  return clean === '1234' || clean === '885522';
}

export function isUserAdmin(email?: string | null): boolean {
  if (!email || typeof email !== 'string') return false;
  const clean = email.trim().toLowerCase();
  return AUTHORIZED_ADMIN_EMAILS.some(adminEmail => adminEmail.toLowerCase() === clean);
}
