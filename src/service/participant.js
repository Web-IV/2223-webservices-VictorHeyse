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

const create = async (data) => {
  debugLog(`Creating new participant ${JSON.stringify(data)}`);
  const recordId = uuidv4();
  let userId = 0;

  try {
    const user = await userService.getByAuth0Id(data.state.user.sub);
    userId = user.id;
  } catch (err) {
    await addUserInfo(data);
    userId = await userService.register({
      name: data.state.user.name,
      auth0id: data.state.user.sub,
    });
  }

  Participant.create({
    activityId: data.activityId,
    userId: userId,
    recordId: recordId,
  });
};

const deleteById = (recordId) => {
  debugLog(`Deleting participant with recordId ${recordId}`);
  Participant.destroy({ where: { recordId: recordId } });
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
