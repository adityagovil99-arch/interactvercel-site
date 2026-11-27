const {
  ADMIN_AUTH_UID,
  verifyBearerToken,
  readTeamDataDoc,
  stripPasscodes,
  resolveMemberByEmail,
  belongsToMember
} = require('./_firebaseAdmin');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authResult = await verifyBearerToken(req);
  if (authResult.error) {
    return res.status(authResult.status).json({ error: authResult.error });
  }

  try {
    const docResult = await readTeamDataDoc();
    if (docResult.error) {
      return res.status(docResult.status).json({ error: docResult.error });
    }
    const rawData = docResult.data || {};
    const cleanData = stripPasscodes(rawData);
    const decoded = authResult.decoded;

    res.setHeader('Cache-Control', 'no-store, max-age=0');

    // Master Admin receives full dataset
    if (decoded.uid === ADMIN_AUTH_UID) {
      return res.status(200).json({
        ok: true,
        role: 'admin',
        data: cleanData
      });
    }

    // Committee Member receives only their own private records
    const matchedMember = resolveMemberByEmail(cleanData.committeeMembers, decoded.email);
    if (!matchedMember) {
      return res.status(403).json({ error: 'no_committee_profile' });
    }
    if (matchedMember.portalLocked) {
      return res.status(403).json({ error: 'portal_locked' });
    }

    const memberDemerits = Array.isArray(cleanData.demerits)
      ? cleanData.demerits.filter(d => belongsToMember(d, matchedMember))
      : [];

    const memberWarnings = Array.isArray(cleanData.warnings)
      ? cleanData.warnings.filter(w => belongsToMember(w, matchedMember))
      : [];

    const memberOffers = Array.isArray(cleanData.offerLetterRequests)
      ? cleanData.offerLetterRequests.filter(o => belongsToMember(o, matchedMember))
      : [];

    const memberRatings = Array.isArray(cleanData.peerRatings)
      ? cleanData.peerRatings.filter(
          r =>
            r &&
            (r.fromMemberId === matchedMember.id || r.toMemberId === matchedMember.id)
        )
      : [];

    return res.status(200).json({
      ok: true,
      role: 'member',
      member: matchedMember,
      privateData: {
        demerits: memberDemerits,
        warnings: memberWarnings,
        offerLetterRequests: memberOffers,
        peerRatings: memberRatings
      }
    });
  } catch (err) {
    console.error('GET /api/portal-data failed:', err);
    return res.status(500).json({ error: 'server_error' });
  }
};
