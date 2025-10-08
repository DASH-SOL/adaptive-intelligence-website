// File: src/pages/api/revalidate.js
export default async function handler(req, res) {
  // Check for the secret token to prevent unauthorized access
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // This is the key part: re-generate the page for the path provided in the webhook body
    // Strapi will send a body like { model: 'homepage', entry: { slug: '...' } }
    // We will need to map the model to the path.
    const pathToRevalidate = req.body.entry.slug 
      ? `/case-studies/${req.body.entry.slug}` 
      : '/'; // Default to homepage if no slug

    await res.revalidate(pathToRevalidate);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}