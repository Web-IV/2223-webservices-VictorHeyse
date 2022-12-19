const Router = require("@koa/router");
const Joi = require("joi");
const participantService = require("../service/participant");

const getAllParticipants = async (ctx) => {
  ctx.body = await participantService.getAll();
};

const createParticipant = async (ctx) => {
  const newParticipant = await participantService.create({
    ...ctx.request.body,
  });
  ctx.body = newParticipant;
};

const getParticipantById = async (ctx) => {
  ctx.body = await participantService.getById(ctx.params.id);
};

const deleteParticipant = async (ctx) => {
  participantService.deleteById(ctx.params.id);
  ctx.status = 204;
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/participants",
  });

  router.get("/", getAllParticipants);
  router.post("/", createParticipant);
  router.get("/:id", getParticipantById);
  router.delete("/:id", deleteParticipant);

  app.use(router.routes()).use(router.allowedMethods());
};
