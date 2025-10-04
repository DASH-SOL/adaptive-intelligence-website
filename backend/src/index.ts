import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Force Koa to trust proxy headers from Render
    strapi.server.app.proxy = true;
  },
  
  bootstrap() {},
};