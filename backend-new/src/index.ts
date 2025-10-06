import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Force Koa to trust proxy headers EARLY in the lifecycle
    strapi.server.app.proxy = true;
  },
  bootstrap() {},
};