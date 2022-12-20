const Router = require("@koa/router");
const installActivityRouter = require("./_activities");
const installParticipantRouter = require("./_participants");
const installUserRouter = require("./_users");

module.exports = (app) => {
  const router = new Router({
    prefix: "/api",
  });

  installActivityRouter(router);
  installParticipantRouter(router);
  installUserRouter(router);
  app.use(router.routes()).use(router.allowedMethods());
};
