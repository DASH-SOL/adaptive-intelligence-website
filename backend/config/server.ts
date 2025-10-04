module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Add this configuration
  proxy: true,
  url: env('PUBLIC_URL', 'https://adaptive-intelligence-website-1.onrender.com'),
  admin: {
    url: '/admin',
  },
});