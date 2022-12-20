const Router = require("@koa/router");
const Joi = require("joi");
const validate = require("./_validation");
const { hasPermission, permissions } = require("../core/auth");
const userService = require("../service/user");

const getAllUsers = async (ctx) => {
  ctx.body = await userService.getAll();
};

getAllUsers.validationScheme = {
  query: Joi.object({
    limit: Joi.number().positive().max(1000).optional(),
    offset: Joi.number().min(0).optional(),
  }).and("limit", "offset"),
};

const getUserById = async (ctx) => {
  ctx.body = await userService.getById(ctx.params.id);
};

getUserById.validationScheme = {
  params: Joi.object({
    id: Joi.number(),
  }),
};

const updateUser = async (ctx) => {
  ctx.body = await userService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

updateUser.validationScheme = {
  params: {
    id: Joi.number(),
  },
  body: {
    name: Joi.string(),
  },
};

const deleteUser = async (ctx) => {
  userService.deleteById(ctx.params.id);
  ctx.status = 204;
};

deleteUser.validationScheme = {
  params: {
    id: Joi.number(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/users",
  });

  router.get(
    "/",
    hasPermission(permissions.readAll),
    validate(getAllUsers.validationScheme),
    getAllUsers
  );
  router.put(
    "/:id",
    hasPermission(permissions.writeAll),
    validate(updateUser.validationScheme),
    updateUser
  );
  router.get(
    "/:id",
    hasPermission(permissions.readAll),
    validate(getUserById.validationScheme),
    getUserById
  );
  router.delete(
    "/:id",
    hasPermission(permissions.writeAll),
    validate(deleteUser.validationScheme),
    deleteUser
  );

  app.use(router.routes()).use(router.allowedMethods());
};
