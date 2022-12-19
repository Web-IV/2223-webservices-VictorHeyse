const Router = require("@koa/router");
const installActivityRouter = require("./_activities");
const installParticipantRouter = require("./_participants");

module.exports = (app) => {
  const router = new Router({
    prefix: "/api",
  });

  installActivityRouter(router);
  installParticipantRouter(router);
  app.use(router.routes()).use(router.allowedMethods());
};
