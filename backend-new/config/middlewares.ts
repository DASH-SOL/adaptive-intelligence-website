export default [
  'strapi::errors',
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',
      secure: false,  // Disable secure requirement
      sameSite: 'lax',
      rolling: false,
      renew: false,
      proxy: true,  // Tell koa-session to trust proxy
    },
  },
  'strapi::security',
  'strapi::cors',
  // ... rest of middleware
];