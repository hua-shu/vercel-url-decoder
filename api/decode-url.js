module.exports = (req, res) => {
  if (req.method === 'GET') {
    // Extract the encodedURL from the query string
    const { encodedURL } = req.query;

    if (!encodedURL) {
      return res.status(400).json({ error: 'encodedURL parameter is required' });
    }

    try {
      // Decode the URL
      const decodedURL = decodeURIComponent(encodedURL);
      res.status(200).json({ decodedURL });
    } catch (error) {
      res.status(400).json({ error: 'Invalid URL' });
    }
  } else {
    // Respond with a 405 if the method is not GET
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
