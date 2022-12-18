const Koa = require("koa");
const koaCors = require("@koa/cors");
const config = require("config");
const bodyParser = require("koa-bodyparser");
const Router = require("@koa/router");
const activityService = require("./src/service/activity");
const { getLogger } = require("./src/core/logging");

const NODE_ENV = config.get("env");
const CORS_ORIGINS = config.get("cors.origins");
const CORS_MAX_AGE = config.get("cors.maxAge");
const LOG_LEVEL = config.get("log.level");
const LOG_DISABLED = config.get("log.disabled");

module.exports = async function createServer() {
  const db = require("./src/data");
  try {
    await db.authenticate();
    console.log(
      "info: Connection with database has been established successfully."
    );
  } catch (error) {
    console.error("info: Unable to connect to the database:", error);
  }

  const app = new Koa();

  app.use(
    koaCors({
      origin: (ctx) => {
        if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
          return ctx.request.header.origin;
        }
        // Not a valid domain at this point, let's return the first valid as we should return a string
        return CORS_ORIGINS[0];
      },
      allowHeaders: ["Accept", "Content-Type", "Authorization"],
      maxAge: CORS_MAX_AGE,
    })
  );

  const logger = getLogger();

  const router = new Router();

  router.get("/api/activities", async (ctx) => {
    ctx.body = await activityService.getAll();
  });

  router.get("/api/activities:id", async (ctx) => {
    ctx.body = await activityService.getById(ctx.params.id);
  });

  router.put("/api/activities", async (ctx) => {
    ctx.body = await activityService.updateById(ctx.params.id, ...ctx.params);
  });

  router.delete("/api/activities:id", async (ctx) => {
    ctx.body = await activityService.deleteById(ctx.params.id);
  });

  // post does NOT work at this build (bug)
  router.post("/api/activities", async (ctx) => {
    let activity = ctx.request.body;
    activity = await activityService.create();
    // ctx.response.code = 200;
    ctx.body = activity;
  });

  app.use(router.routes()).use(router.allowedMethods());

  app.use(bodyParser());

  return {
    getApp() {
      return app;
    },

    start() {
      return new Promise((resolve) => {
        app.listen(9000);
        logger.info(`🚀 Server listening on http://localhost:9000`);
        resolve();
      });
    },

    async stop() {
      app.removeAllListeners();
      await shutdownData();
      getLogger().info("Goodbye");
    },
  };
};
