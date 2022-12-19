const Participant = require("../../models/participant");
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

const getById = async (userId) => {
  debugLog(`Fetching participant with userId ${userId}`);
  return await Participant.findAll({
    where: {
      userId: userId,
    },
    raw: true,
  });
};

const create = async (data) => {
  debugLog(`Creating new participant ${data.userId} ${JSON.stringify(data)}`);
  Participant.create({
    id: data.id,
    userId: data.userId,
  });
};

const deleteById = (userId) => {
  debugLog(`Deleting participant with userId ${userId}`);
  Participant.destroy({ where: { userId: userId } });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
};
