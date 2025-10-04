module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: true,
  url: env('PUBLIC_URL', 'https://adaptive-intelligence-website-1.onrender.com'),
  session: {
    clientBasedSessions: true,
    cookie: {
      secure: false, // Temporary fix
      httpOnly: true,
      maxAge: 86400000,
    },
  },
});