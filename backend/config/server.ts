export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: true,
  url: env('PUBLIC_URL'), // No default - only uses it if env var exists
  session: {
    clientBasedSessions: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 86400000,
    },
  },
});