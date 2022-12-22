const Participant = require("../../models/participant");
const ServiceError = require("../core/serviceError");
const userService = require("../service/user");
const { addUserInfo } = require("../core/auth");
const { v4: uuidv4 } = require("uuid");
const { getLogger } = require("../core/logging");

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getLogger();
  this.logger.debug(message, meta);
};

const getAll = async () => {
  debugLog("Fetching all participants");
  return await Participant.findAll({
    raw: true,
  });
};

const getById = async (recordId) => {
  debugLog(`Fetching participant ${recordId}`);
  const record = await Participant.findAll({
    where: {
      recordId: recordId,
    },
    raw: true,
  });

  if (!record || record.length === 0) {
    throw ServiceError.notFound(
      `There is no participant with recordId ${recordId}`
    );
  }
  return record;
};

const create = async (ctx) => {
  debugLog(`Creating new participant ${JSON.stringify(ctx.request.body)}`);
  const recordId = uuidv4();
  let userId = 0;

  try {
    const user = await userService.getByAuth0Id(ctx.state.user.sub);
    const obj = JSON.parse(JSON.stringify(user[0]));
    userId = obj.id;
  } catch (err) {
    await addUserInfo(ctx);
    const user = await userService.register({
      name: ctx.state.user.name,
      auth0id: ctx.state.user.sub,
    });
    const object = JSON.parse(JSON.stringify(user));
    userId = object.id;
  }

  // check if participant doesn't already exist
  const participant = await Participant.findAll({
    where: {
      activityId: ctx.request.body.activityId,
      userId: userId,
    },
    raw: true,
  });

  let participantExists = false;

  try {
    const destruc = JSON.parse(JSON.stringify(participant[0]));
    if (typeof destruc.userId === "undefined") {
      throw new Error();
    }
    participantExists = true;
  } catch (err) {
    Participant.create({
      activityId: ctx.request.body.activityId,
      userId: userId,
      recordId: recordId,
    });
  }

  if (participantExists) {
    throw ServiceError.validationFailed(
      `Je bent al ingeschreven voor deze activiteit`
    );
  }
};

const deleteById = async (ctx) => {
  debugLog(
    `Deleting participant with activityId ${JSON.stringify(ctx.params.id)}`
  );
  let userId = 0;

  try {
    const user = await userService.getByAuth0Id(ctx.state.user.sub);
    const obj = JSON.parse(JSON.stringify(user[0]));
    userId = obj.id;
  } catch (err) {}

  // check if participant exists
  const participant = await Participant.findAll({
    where: {
      activityId: ctx.params.id,
      userId: userId,
    },
    raw: true,
  });
  try {
    const destruc = JSON.parse(JSON.stringify(participant[0]));
    if (typeof destruc.userId !== "undefined") {
      Participant.destroy({
        where: { activityId: ctx.params.id, userId: userId },
      });
    } else {
      throw new Error();
    }
  } catch (err) {}
};

const updateById = async (recordId, data) => {
  debugLog(
    `Updating participant with recordId ${recordId} ${JSON.stringify(data)}`
  );
  Participant.upsert({
    recordId: recordId,
    userId: data.userId,
    activityId: data.activityId,
  });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
