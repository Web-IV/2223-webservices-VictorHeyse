const Router = require("@koa/router");
const Joi = require("joi");
const validate = require("./_validation");
const participantService = require("../service/participant");

const getAllParticipants = async (ctx) => {
  ctx.body = await participantService.getAll();
};

getAllParticipants.validationScheme = {
  query: Joi.object({
    limit: Joi.number().positive().max(1000).optional(),
    offset: Joi.number().min(0).optional(),
  }).and("limit", "offset"),
};

const createParticipant = async (ctx) => {
  const newParticipant = await participantService.create({
    ...ctx.request.body,
  });
  ctx.body = newParticipant;
};

createParticipant.validationScheme = {
  body: {
    activityId: Joi.string().uuid(),
    userId: Joi.string().uuid(),
  },
};

const getParticipantById = async (ctx) => {
  ctx.body = await participantService.getById(ctx.params.id);
};

getParticipantById.validationScheme = {
  params: Joi.object({
    id: Joi.string().uuid(),
  }),
};

const updateParticipant = async (ctx) => {
  ctx.body = await participantService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

updateParticipant.validationScheme = {
  params: {
    id: Joi.string().uuid(),
  },
  body: {
    userId: Joi.string().uuid(),
    activityId: Joi.string().uuid(),
  },
};

const deleteParticipant = async (ctx) => {
  participantService.deleteById(ctx.params.id);
  ctx.status = 204;
};

deleteParticipant.validationScheme = {
  params: {
    id: Joi.string().uuid(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/participants",
  });

  router.get(
    "/",
    validate(getAllParticipants.validationScheme),
    getAllParticipants
  );
  router.post(
    "/",
    validate(createParticipant.validationScheme),
    createParticipant
  );
  router.put(
    "/:id",
    validate(updateParticipant.validationScheme),
    updateParticipant
  );
  router.get(
    "/:id",
    validate(getParticipantById.validationScheme),
    getParticipantById
  );
  router.delete(
    "/:id",
    validate(deleteParticipant.validationScheme),
    deleteParticipant
  );

  app.use(router.routes()).use(router.allowedMethods());
};
