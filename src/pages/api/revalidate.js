export default async function handler(req, res) {
  // Check for the secret token
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    let pathsToRevalidate = [];

    // If path is provided in query (for static pages)
    if (req.query.path) {
      pathsToRevalidate.push(req.query.path);
    } 
    // If webhook body contains entry data (for dynamic pages like case studies)
    else if (req.body && req.body.entry) {
      const entry = req.body.entry;
      
      // For case studies with slugs
      if (entry.slug) {
        pathsToRevalidate.push(`/case-studies/${entry.slug}`);
      }
      
      // Also revalidate the case studies listing page
      pathsToRevalidate.push('/case-studies');
    }

    if (pathsToRevalidate.length === 0) {
      return res.status(400).json({ message: 'No path to revalidate' });
    }

    // Revalidate all paths
    const results = await Promise.all(
      pathsToRevalidate.map(path => res.revalidate(path))
    );
    
    return res.json({ 
      revalidated: true, 
      paths: pathsToRevalidate 
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return res.status(500).json({ message: 'Error revalidating', error: err.message });
  }
}