const admin = require('firebase-admin');

const ADMIN_AUTH_UID = 'FX9s7HkfmRhqRRy3S37WyLEVNkj2';
const COLLECTION_NAME = 'interactup_config';
const DOC_ID = 'team_data';

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw || !raw.trim()) return null;
  try {
    const trimmed = raw.trim();
    const jsonStr = trimmed.startsWith('{')
      ? trimmed
      : Buffer.from(trimmed, 'base64').toString('utf8');
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Invalid FIREBASE_SERVICE_ACCOUNT format:', err.message);
    return null;
  }
}

function getAdminApp() {
  if (admin.apps.length > 0) {
    return admin.apps[0];
  }
  const serviceAccount = getServiceAccount();
  if (!serviceAccount) return null;

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

function getFirestore() {
  const app = getAdminApp();
  if (!app) return null;
  return admin.firestore(app);
}

async function verifyBearerToken(req) {
  const app = getAdminApp();
  if (!app) {
    return { error: 'not_configured', status: 503 };
  }
  const authHeader = req.headers.authorization || req.headers.Authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return { error: 'missing_token', status: 401 };
  }
  const idToken = authHeader.slice(7).trim();
  if (!idToken) {
    return { error: 'missing_token', status: 401 };
  }
  try {
    const decoded = await admin.auth(app).verifyIdToken(idToken);
    return { decoded };
  } catch (err) {
    return { error: 'invalid_token', status: 401 };
  }
}

function stripPasscodes(data) {
  if (!data || typeof data !== 'object') return data;
  const copy = JSON.parse(JSON.stringify(data));
  delete copy.teamPasscode;
  delete copy.adminPasscode;
  if (Array.isArray(copy.committeeMembers)) {
    copy.committeeMembers = copy.committeeMembers.map(m => {
      if (m && typeof m === 'object') {
        const clean = { ...m };
        delete clean.passcode;
        return clean;
      }
      return m;
    });
  }
  return copy;
}

function sanitizePublicData(data) {
  if (!data || typeof data !== 'object') return {};
  const clean = stripPasscodes(data);

  if (Array.isArray(clean.committeeMembers)) {
    clean.committeeMembers = clean.committeeMembers.map(m => {
      if (!m || typeof m !== 'object') return m;
      const pub = { ...m };
      delete pub.email;
      return pub;
    });
  }

  // Keep private conduct, offer letter, and peer review records off public responses
  clean.demerits = [];
  clean.warnings = [];
  clean.offerLetterRequests = [];
  clean.peerRatings = [];

  return clean;
}

function resolveMemberByEmail(members, email) {
  if (!Array.isArray(members) || !email) return null;
  const lower = String(email).trim().toLowerCase();
  const localPart = lower.split('@')[0].replace(/[^a-z0-9]/g, '');
  return (
    members.find(m => m && m.email && String(m.email).trim().toLowerCase() === lower) ||
    members.find(m => {
      const cleanName = ((m && m.name) || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanName && (localPart === cleanName || localPart.startsWith(cleanName));
    }) ||
    null
  );
}

function belongsToMember(record, member) {
  if (!record || !member) return false;
  if (record.memberId && record.memberId === member.id) return true;
  if (
    record.memberName &&
    member.name &&
    String(record.memberName).trim().toLowerCase() === String(member.name).trim().toLowerCase()
  ) {
    return true;
  }
  return false;
}

async function readTeamDataDoc() {
  const db = getFirestore();
  if (!db) return { error: 'not_configured', status: 503 };
  const snap = await db.collection(COLLECTION_NAME).doc(DOC_ID).get();
  return { data: snap.exists ? snap.data() : null, db };
}

module.exports = {
  ADMIN_AUTH_UID,
  COLLECTION_NAME,
  DOC_ID,
  getFirestore,
  verifyBearerToken,
  stripPasscodes,
  sanitizePublicData,
  resolveMemberByEmail,
  belongsToMember,
  readTeamDataDoc
};
