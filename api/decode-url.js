
module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { encodedURL } = req.body;
    try {
      const decodedURL = decodeURIComponent(encodedURL);
      res.status(200).json({ decodedURL });
    } catch (error) {
      res.status(400).json({ error: 'Invalid URL' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
