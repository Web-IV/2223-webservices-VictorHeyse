const Router = require("@koa/router");
const Joi = require("joi");
const validate = require("./_validation");
const { hasPermission, permissions } = require("../core/auth");
const activityService = require("../service/activity");

const getAllActivities = async (ctx) => {
  ctx.body = await activityService.getAll();
};

getAllActivities.validationScheme = {
  query: Joi.object({
    limit: Joi.number().positive().max(1000).optional(),
    offset: Joi.number().min(0).optional(),
  }).and("limit", "offset"),
};

const createActivity = async (ctx) => {
  const newActivity = await activityService.create({
    ...ctx.request.body,
  });
  ctx.body = newActivity;
};

createActivity.validationScheme = {
  body: {
    name: Joi.string(),
    description: Joi.string(),
    place: Joi.string(),
    date: Joi.date(),
  },
};

const getActivityById = async (ctx) => {
  ctx.body = await activityService.getById(ctx.params.id);
};

getActivityById.validationScheme = {
  params: Joi.object({
    id: Joi.string().uuid(),
  }),
};

const updateActivity = async (ctx) => {
  ctx.body = await activityService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

updateActivity.validationScheme = {
  params: {
    id: Joi.string().uuid(),
  },
  body: {
    name: Joi.string(),
    description: Joi.string(),
    place: Joi.string(),
    date: Joi.date(),
  },
};

const deleteActivity = async (ctx) => {
  activityService.deleteById(ctx.params.id);
  ctx.status = 204;
};

deleteActivity.validationScheme = {
  params: {
    id: Joi.string().uuid(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/activities",
  });

  router.get(
    "/",
    hasPermission(permissions.readActivities),
    validate(getAllActivities.validationScheme),
    getAllActivities
  );
  router.post(
    "/",
    hasPermission(permissions.writeActivities),
    validate(createActivity.validationScheme),
    createActivity
  );
  router.get(
    "/:id",
    hasPermission(permissions.readActivities),
    validate(getActivityById.validationScheme),
    getActivityById
  );
  router.put(
    "/:id",
    hasPermission(permissions.writeActivities),
    validate(updateActivity.validationScheme),
    updateActivity
  );
  router.delete(
    "/:id",
    hasPermission(permissions.writeActivities),
    validate(deleteActivity.validationScheme),
    deleteActivity
  );

  app.use(router.routes()).use(router.allowedMethods());
};
