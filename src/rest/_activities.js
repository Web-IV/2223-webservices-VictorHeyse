const Router = require("@koa/router");
const activityService = require("../service/activity");

const getAllActivities = async (ctx) => {
  ctx.body = activityService.getAll();
};

const createActivity = async (ctx) => {
  const newActivity = activityService.create({
    ...ctx.request.body,
  });
  ctx.body = newActivity;
};

const getActivityById = async (ctx) => {
  ctx.body = activityService.getById(ctx.params.id);
};

const updateActivity = async (ctx) => {
  ctx.body = activityService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

const deleteActivity = async (ctx) => {
  activityService.deleteById(ctx.params.id);
  ctx.status = 204;
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/transactions",
  });

  router.get("/", getAllActivities);
  router.post("/", createActivity);
  router.get("/:id", getActivityById);
  router.put("/:id", updateActivity);
  router.delete("/:id", deleteActivity);

  app.use(router.routes()).use(router.allowedMethods());
};
