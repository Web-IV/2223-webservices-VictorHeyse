const Router = require("@koa/router");
const installActivityRouter = require("./_activities");

module.exports = (app) => {
  const router = new Router({
    prefix: "/api",
  });

  installActivityRouter(router);
  app.use(router.routes()).use(router.allowedMethods());
};
