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
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
