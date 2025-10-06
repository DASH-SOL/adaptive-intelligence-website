export default {
  config: {
    locales: ['en'],
    auth: {
      logo: '/uploads/logo_black.svg',
    },
    head: {
      favicon: '/uploads/favicon.ico',
    },
    menu: {
      logo: '/uploads/logo_black.svg',
    },
    theme: {
      colors: {
        primary100: '#fff0f8',
        primary200: '#ffe0f1',
        primary500: '#FF1292',
        primary600: '#e60d82',
        primary700: '#cc0b73',
        danger700: '#cc0b73',
      },
    },
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Adaptive Intelligence',
        'app.components.LeftMenu.navbrand.workplace': 'Admin Dashboard',
      },
    },
  },
  bootstrap() {},
};