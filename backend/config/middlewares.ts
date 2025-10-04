export default [
  'strapi::errors',
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',
      secure: false,  // Set to false for now
      sameSite: 'lax',
      rolling: false,
      renew: false,
      proxy: true,  // Tell koa-session to trust the proxy
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::body',
  'strapi::logger',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
];