const Koa = require("koa");
const koaCors = require("@koa/cors");
const config = require("config");
const bodyParser = require("koa-bodyparser");
const Router = require("@koa/router");
const activityService = require("./service/activity");
const { getLogger } = require("./core/logging");

// Initializing configs
const NODE_ENV = config.get("env");
const CORS_ORIGINS = config.get("cors.origins");
const CORS_MAX_AGE = config.get("cors.maxAge");
const LOG_LEVEL = config.get("log.level");
const LOG_DISABLED = config.get("log.disabled");

async function main() {
  // Initializing Koa
  const app = new Koa();

  // Initializing database
  const db = require("../src/data");
  try {
    await db.authenticate();
    console.log(
      "info: Connection with database has been established successfully."
    );
  } catch (error) {
    console.error("info: Unable to connect to the database:", error);
  }

  // Defining CORS
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

  // Initializing Logger
  const logger = getLogger();

  // Initializing Router
  const router = new Router();

  // Defining routes
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

  logger.info(`🚀 Server listening on http://localhost:9000`);
  app.listen(9000);
}

main();
