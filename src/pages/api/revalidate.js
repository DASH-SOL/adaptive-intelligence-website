export default async function handler(req, res) {
  // Check for the secret token
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Get path from query parameter (simpler approach)
    const path = req.query.path || '/';
    
    if (!path) {
      return res.status(400).json({ message: 'Path is required' });
    }

    // Revalidate the specified path
    await res.revalidate(path);
    
    return res.json({ revalidated: true, path });
  } catch (err) {
    console.error('Revalidation error:', err);
    return res.status(500).json({ message: 'Error revalidating', error: err.message });
  }
}