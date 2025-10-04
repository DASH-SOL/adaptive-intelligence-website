module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  url: env('ADMIN_URL', '/admin'),
  // Add this to trust the proxy
  forgotPassword: {
    from: env('EMAIL_FROM'),
    replyTo: env('EMAIL_REPLY_TO'),
  },
});