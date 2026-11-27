const {
  ADMIN_AUTH_UID,
  COLLECTION_NAME,
  DOC_ID,
  verifyBearerToken,
  readTeamDataDoc,
  resolveMemberByEmail,
  belongsToMember
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

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const action = body && body.action;
    if (!action) {
      return res.status(400).json({ error: 'missing_action' });
    }

    const docResult = await readTeamDataDoc();
    if (docResult.error) {
      return res.status(docResult.status).json({ error: docResult.error });
    }

    const db = docResult.db;
    const data = docResult.data || {};
    const decoded = authResult.decoded;
    const isAdmin = decoded.uid === ADMIN_AUTH_UID;
    const member = resolveMemberByEmail(data.committeeMembers, decoded.email);

    if (!isAdmin && (!member || member.portalLocked)) {
      return res.status(403).json({ error: 'forbidden' });
    }

    const targetMember = member || (body.memberId && Array.isArray(data.committeeMembers)
      ? data.committeeMembers.find(m => m.id === body.memberId)
      : null);

    if (action === 'offer_letter_request') {
      const emailVal = String((body && body.email) || '').trim();
      if (!emailVal || !emailVal.includes('@') || !targetMember) {
        return res.status(400).json({ error: 'invalid_request' });
      }
      if (!Array.isArray(data.offerLetterRequests)) data.offerLetterRequests = [];
      const existing = data.offerLetterRequests.find(r => belongsToMember(r, targetMember));
      const nowFormatted = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      if (existing) {
        existing.email = emailVal;
        existing.requestedAt = nowFormatted;
        existing.status = 'Pending Dispatch';
      } else {
        data.offerLetterRequests.unshift({
          id: 'req-' + Date.now(),
          memberId: targetMember.id,
          memberName: targetMember.name,
          email: emailVal,
          requestedAt: nowFormatted,
          status: 'Pending Dispatch'
        });
      }
      await db.collection(COLLECTION_NAME).doc(DOC_ID).set(data);
      return res.status(200).json({ ok: true });
    }

    if (action === 'peer_rating') {
      const review = body && body.review;
      if (!review || !targetMember || !review.toMemberId || !review.rating) {
        return res.status(400).json({ error: 'invalid_review' });
      }
      if (!Array.isArray(data.peerRatings)) data.peerRatings = [];
      data.peerRatings.unshift({
        id: 'review-' + Date.now(),
        fromMemberId: targetMember.id,
        fromMemberName: targetMember.name,
        toMemberId: String(review.toMemberId),
        toMemberName: String(review.toMemberName || ''),
        project: String(review.project || ''),
        rating: Number(review.rating),
        description: String(review.description || ''),
        createdAt: new Date().toLocaleString()
      });
      await db.collection(COLLECTION_NAME).doc(DOC_ID).set(data);
      return res.status(200).json({ ok: true });
    }

    if (action === 'sync_tasks') {
      if (!Array.isArray(body && body.appreciationTasks)) {
        return res.status(400).json({ error: 'invalid_tasks' });
      }
      data.appreciationTasks = body.appreciationTasks;
      await db.collection(COLLECTION_NAME).doc(DOC_ID).set(data);
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: 'unknown_action' });
  } catch (err) {
    console.error('POST /api/member-action failed:', err);
    return res.status(500).json({ error: 'server_error' });
  }
};
