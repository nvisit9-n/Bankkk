import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { UserActivityRecord, DownloadEventRecord, ExamScoreRecord, ExamSubmissionRecord, UserProfile } from '../types';

export type { UserActivityRecord, DownloadEventRecord, ExamScoreRecord, ExamSubmissionRecord };
export type ActivityLogRecord = UserActivityRecord;

const STORAGE_KEYS = {
  USER_ACTIVITIES: 'btn_user_activities_cache',
  DOWNLOAD_EVENTS: 'btn_download_events_cache',
  EXAM_SCORES: 'btn_exam_scores_cache',
  EXAM_SUBMISSIONS: 'btn_exam_submissions_cache',
};

export class ActivityTrackingService {
  /**
   * Log authenticated user activity (e.g. detailed reading material, study notes, syllabus)
   */
  static async logActivity(params: {
    user: UserProfile;
    activityType: 'reading' | 'download' | 'exam_start' | 'exam_complete' | 'syllabus_view';
    details: string;
    targetId?: string;
    targetTitle?: string;
    metadata?: Record<string, any>;
  }): Promise<UserActivityRecord | null> {
    if (!params.user || params.user.isGuest || !params.user.email) {
      return null;
    }

    const record: UserActivityRecord = {
      id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: params.user.authUid || params.user.id || 'unknown_user',
      userName: params.user.displayName || params.user.name || 'Anonymous Student',
      userEmail: params.user.email,
      activityType: params.activityType,
      details: params.details,
      timestamp: new Date().toISOString(),
      metadata: {
        ...(params.metadata || {}),
        ...(params.targetId ? { targetId: params.targetId } : {}),
        ...(params.targetTitle ? { targetTitle: params.targetTitle } : {})
      }
    };

    // 1. Cache locally for instant availability
    try {
      const cached = this.getLocalActivities();
      cached.unshift(record);
      localStorage.setItem(STORAGE_KEYS.USER_ACTIVITIES, JSON.stringify(cached.slice(0, 200)));
    } catch (e) {
      console.warn('Local activity cache warning:', e);
    }

    // 2. Persist to Firestore collection `user_activities`
    try {
      if (db) {
        await addDoc(collection(db, 'user_activities'), record);
      }
    } catch (fsErr) {
      console.warn('Firestore activity log warning:', fsErr);
    }

    // 3. Dual sync to backend API endpoint
    try {
      fetch('/api/tracking/activity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      }).catch(() => {});
    } catch {}

    return record;
  }

  /**
   * Log authenticated user resource / PDF download event
   */
  static async logDownload(params: {
    user: UserProfile;
    resourceName?: string;
    fileType?: string;
    details?: string;
    fileId?: string;
    fileName?: string;
    resourceCategory?: string;
    fileSize?: string;
  }): Promise<DownloadEventRecord | null> {
    if (!params.user || params.user.isGuest || !params.user.email) {
      return null;
    }

    const name = params.resourceName || params.fileName || 'Study Material';
    const type = params.fileType || 'PDF';

    const record: DownloadEventRecord = {
      id: `dl-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: params.user.authUid || params.user.id || 'unknown_user',
      userName: params.user.displayName || params.user.name || 'Anonymous Student',
      userEmail: params.user.email,
      resourceName: name,
      fileType: type,
      fileName: params.fileName || name,
      fileId: params.fileId,
      resourceCategory: params.resourceCategory,
      fileSize: params.fileSize,
      details: params.details || `डाउनलोड: ${name}`,
      timestamp: new Date().toISOString()
    };

    // 1. Cache locally
    try {
      const cached = this.getLocalDownloads();
      cached.unshift(record);
      localStorage.setItem(STORAGE_KEYS.DOWNLOAD_EVENTS, JSON.stringify(cached.slice(0, 200)));
    } catch (e) {
      console.warn('Local download cache warning:', e);
    }

    // 2. Persist to Firestore collection `download_events`
    try {
      if (db) {
        await addDoc(collection(db, 'download_events'), record);
      }
    } catch (fsErr) {
      console.warn('Firestore download log warning:', fsErr);
    }

    // 3. Also log as general activity
    this.logActivity({
      user: params.user,
      activityType: 'download',
      details: `डाउनलोड: ${name} (${type})`,
      targetId: params.fileId,
      targetTitle: name,
      metadata: { resourceName: name, fileType: type, category: params.resourceCategory }
    }).catch(() => {});

    // 4. Dual sync to backend API
    try {
      fetch('/api/tracking/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      }).catch(() => {});
    } catch {}

    return record;
  }

  /**
   * Log authenticated user exam score directly to Firestore
   */
  static async logExamScore(params: {
    user: UserProfile;
    quizId: string;
    quizTitle: string;
    category: string;
    mode?: string;
    score?: number;
    totalQuestions: number;
    correctAnswers?: number;
    incorrectAnswers?: number;
    negativeDeduction?: number;
    accuracy: number;
    timeElapsedSeconds?: number;
    attempted?: number;
    correct?: number;
    incorrect?: number;
    skipped?: number;
    netScore?: number;
    timeTakenSeconds?: number;
  }): Promise<ExamScoreRecord | null> {
    if (!params.user || params.user.isGuest || !params.user.email) {
      return null;
    }

    const netScore = params.score ?? params.netScore ?? 0;
    const correct = params.correctAnswers ?? params.correct ?? 0;
    const incorrect = params.incorrectAnswers ?? params.incorrect ?? 0;
    const timeSpent = params.timeElapsedSeconds ?? params.timeTakenSeconds ?? 0;

    const record: ExamScoreRecord = {
      id: `score-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: params.user.authUid || params.user.id || 'unknown_user',
      userName: params.user.displayName || params.user.name || 'Anonymous Student',
      userEmail: params.user.email,
      quizId: params.quizId,
      quizTitle: params.quizTitle,
      category: params.category,
      mode: params.mode || 'practice',
      score: netScore,
      totalQuestions: params.totalQuestions,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      negativeDeduction: params.negativeDeduction || 0,
      accuracy: params.accuracy,
      timeElapsedSeconds: timeSpent,
      timestamp: new Date().toISOString()
    };

    // 1. Cache locally
    try {
      const cached = this.getLocalExamScores();
      cached.unshift(record);
      localStorage.setItem(STORAGE_KEYS.EXAM_SCORES, JSON.stringify(cached.slice(0, 200)));
    } catch (e) {
      console.warn('Local exam score cache warning:', e);
    }

    // 2. Persist to Firestore collection `exam_scores`
    try {
      if (db) {
        await addDoc(collection(db, 'exam_scores'), record);
      }
    } catch (fsErr) {
      console.warn('Firestore exam score log warning:', fsErr);
    }

    // 3. Dual sync to backend API
    try {
      fetch('/api/tracking/exam-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      }).catch(() => {});
    } catch {}

    // 4. Synchronize with exam_submissions collection as well
    this.recordExamSubmission({
      user: params.user,
      quizId: params.quizId,
      quizTitle: params.quizTitle,
      category: params.category,
      score: netScore,
      totalQuestions: params.totalQuestions,
      attemptedCount: params.attempted ?? (correct + incorrect),
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      skippedCount: params.skipped ?? Math.max(0, params.totalQuestions - (correct + incorrect)),
      negativeDeduction: params.negativeDeduction ?? 0,
      accuracy: params.accuracy,
      timeTakenSeconds: timeSpent
    }).catch(() => {});

    return record;
  }

  /**
   * Record complete student exam submission to Firestore `exam_submissions` collection in real-time
   */
  static async recordExamSubmission(params: {
    user: UserProfile;
    quizId: string;
    quizTitle: string;
    category?: string;
    score: number;
    totalQuestions: number;
    accuracy: number;
    timeTakenSeconds: number;
    attemptedCount?: number;
    correctAnswers?: number;
    incorrectAnswers?: number;
    skippedCount?: number;
    negativeDeduction?: number;
  }): Promise<ExamSubmissionRecord | null> {
    if (!params.user || params.user.isGuest || !params.user.email) {
      return null;
    }

    const submission: ExamSubmissionRecord = {
      id: `sub-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      userId: params.user.authUid || params.user.id || 'unknown_user',
      userName: params.user.displayName || params.user.name || 'Anonymous Student',
      userEmail: params.user.email,
      quizId: params.quizId,
      quizTitle: params.quizTitle,
      category: params.category || 'General Banking',
      score: Math.round(params.score * 100) / 100,
      totalQuestions: params.totalQuestions,
      attemptedCount: params.attemptedCount ?? ((params.correctAnswers ?? 0) + (params.incorrectAnswers ?? 0)),
      correctAnswers: params.correctAnswers ?? 0,
      incorrectAnswers: params.incorrectAnswers ?? 0,
      skippedCount: params.skippedCount ?? Math.max(0, params.totalQuestions - ((params.correctAnswers ?? 0) + (params.incorrectAnswers ?? 0))),
      negativeDeduction: params.negativeDeduction ?? 0,
      accuracy: Math.round(params.accuracy * 10) / 10,
      timeTakenSeconds: params.timeTakenSeconds,
      timestamp: new Date().toISOString(),
      submittedAt: new Date().toISOString()
    };

    // 1. Cache locally for instant offline availability
    try {
      const cached = this.getLocalExamSubmissions();
      cached.unshift(submission);
      localStorage.setItem(STORAGE_KEYS.EXAM_SUBMISSIONS, JSON.stringify(cached.slice(0, 200)));
    } catch (e) {
      console.warn('Local exam submission cache notice:', e);
    }

    // 2. Real-time logging to Firestore `exam_submissions` collection
    try {
      if (db) {
        await addDoc(collection(db, 'exam_submissions'), submission);
      }
    } catch (fsErr) {
      console.warn('Firestore exam_submissions recording warning:', fsErr);
    }

    // 3. Dual sync to backend API endpoint
    try {
      fetch('/api/tracking/exam-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      }).catch(() => {});
    } catch {}

    return submission;
  }

  // ==========================================
  // GETTERS FOR ADMIN VIEWING
  // ==========================================

  static getLocalActivities(): UserActivityRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_ACTIVITIES);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  }

  static getLocalDownloads(): DownloadEventRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DOWNLOAD_EVENTS);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  }

  static getLocalExamScores(): ExamScoreRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.EXAM_SCORES);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  }

  static getLocalExamSubmissions(): ExamSubmissionRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.EXAM_SUBMISSIONS);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  }

  /**
   * Fetch all activities with Firestore real-time priority + local fallback
   */
  static async getRecentActivities(limitCount: number = 100): Promise<UserActivityRecord[]> {
    try {
      if (db) {
        const q = query(collection(db, 'user_activities'), orderBy('timestamp', 'desc'), limit(limitCount));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const list: UserActivityRecord[] = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...(doc.data() as any) });
          });
          return list;
        }
      }
    } catch (e) {
      console.warn('Firestore fetch activities fallback to local:', e);
    }

    // Try backend API
    try {
      const res = await fetch('/api/tracking/activities');
      if (res.ok) {
        const data = await res.json();
        if (data && data.activities && data.activities.length > 0) {
          return data.activities;
        }
      }
    } catch {}

    return this.getLocalActivities();
  }

  /**
   * Fetch all download events with Firestore priority + local fallback
   */
  static async getRecentDownloads(limitCount: number = 100): Promise<DownloadEventRecord[]> {
    try {
      if (db) {
        const q = query(collection(db, 'download_events'), orderBy('timestamp', 'desc'), limit(limitCount));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const list: DownloadEventRecord[] = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...(doc.data() as any) });
          });
          return list;
        }
      }
    } catch (e) {
      console.warn('Firestore fetch downloads fallback to local:', e);
    }

    // Try backend API
    try {
      const res = await fetch('/api/tracking/downloads');
      if (res.ok) {
        const data = await res.json();
        if (data && data.downloads && data.downloads.length > 0) {
          return data.downloads;
        }
      }
    } catch {}

    return this.getLocalDownloads();
  }

  /**
   * Fetch all exam scores with Firestore priority + local fallback
   */
  static async getRecentExamScores(limitCount: number = 100): Promise<ExamScoreRecord[]> {
    try {
      if (db) {
        const q = query(collection(db, 'exam_scores'), orderBy('timestamp', 'desc'), limit(limitCount));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const list: ExamScoreRecord[] = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...(doc.data() as any) });
          });
          return list;
        }
      }
    } catch (e) {
      console.warn('Firestore fetch exam scores fallback to local:', e);
    }

    // Try backend API
    try {
      const res = await fetch('/api/tracking/exam-scores');
      if (res.ok) {
        const data = await res.json();
        if (data && data.scores && data.scores.length > 0) {
          return data.scores;
        }
      }
    } catch {}

    return this.getLocalExamScores();
  }

  /**
   * Fetch all exam submissions with Firestore priority + local fallback
   */
  static async getRecentExamSubmissions(limitCount: number = 100): Promise<ExamSubmissionRecord[]> {
    try {
      if (db) {
        const q = query(collection(db, 'exam_submissions'), orderBy('timestamp', 'desc'), limit(limitCount));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const list: ExamSubmissionRecord[] = [];
          snapshot.forEach(doc => {
            list.push({ id: doc.id, ...(doc.data() as any) });
          });
          return list;
        }
      }
    } catch (e) {
      console.warn('Firestore fetch exam submissions fallback to local:', e);
    }

    // Try backend API
    try {
      const res = await fetch('/api/tracking/exam-submissions');
      if (res.ok) {
        const data = await res.json();
        if (data && data.submissions && data.submissions.length > 0) {
          return data.submissions;
        }
      }
    } catch {}

    return this.getLocalExamSubmissions();
  }
}
