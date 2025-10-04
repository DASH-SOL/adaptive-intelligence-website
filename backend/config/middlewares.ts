export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      clientBasedSessions: true,
      rolling: true,
      renew: true,
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 86400000,
        sameSite: 'lax',
      },
    },
  },
  'strapi::favicon',
  'strapi::public',
];