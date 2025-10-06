export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',
      secure: false,
      sameSite: 'lax',
      rolling: false,
      renew: false,
      proxy: true,
    },
  },
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      path: process.env.NODE_ENV === 'production' ? '/data/public' : './public',
    },
  },
];