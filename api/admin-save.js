const {
  ADMIN_AUTH_UID,
  COLLECTION_NAME,
  DOC_ID,
  getFirestore,
  verifyBearerToken,
  stripPasscodes
} = require('./_firebaseAdmin');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authResult = await verifyBearerToken(req);
  if (authResult.error) {
    return res.status(authResult.status).json({ error: authResult.error });
  }

  if (authResult.decoded.uid !== ADMIN_AUTH_UID) {
    return res.status(403).json({ error: 'forbidden' });
  }

  const db = getFirestore();
  if (!db) {
    return res.status(503).json({ error: 'not_configured' });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const teamData = payload && payload.data ? payload.data : payload;
    if (!teamData || typeof teamData !== 'object' || Array.isArray(teamData)) {
      return res.status(400).json({ error: 'invalid_payload' });
    }

    const sanitized = stripPasscodes(teamData);
    await db.collection(COLLECTION_NAME).doc(DOC_ID).set(sanitized);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('POST /api/admin-save failed:', err);
    return res.status(500).json({ error: 'server_error' });
  }
};
