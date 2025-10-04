module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: true,
  // ADD THIS BLOCK TO FIX THE ADMIN LOGIN BUG IN STRAPI v5.24.0
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
      session: {
        secure: false, // This allows the cookie to be sent behind the proxy
      },
    },
  },
});