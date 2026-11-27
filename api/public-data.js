const { readTeamDataDoc, sanitizePublicData } = require('./_firebaseAdmin');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await readTeamDataDoc();
    if (result.error) {
      return res.status(result.status).json({ error: result.error });
    }

    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({
      ok: true,
      data: result.data ? sanitizePublicData(result.data) : null
    });
  } catch (err) {
    console.error('GET /api/public-data failed:', err);
    return res.status(500).json({ error: 'server_error' });
  }
};
