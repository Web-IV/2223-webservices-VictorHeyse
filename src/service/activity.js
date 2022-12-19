const Activity = require("../../models/activity");
const { getLogger } = require("../core/logging");

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getLogger();
  this.logger.debug(message, meta);
};

const getAll = async () => {
  debugLog("Fetching all activities");
  return await Activity.findAll({
    raw: true,
  });
};

const getById = async (userId) => {
  debugLog(`Fetching activity with id ${userId}`);
  return await Activity.findAll({
    where: {
      userId: userId,
    },
    raw: true,
  });
};

const create = async (data) => {
  debugLog(`Creating new activity ${JSON.stringify(data)}`);
  const identifier = Date.now();

  Activity.create({
    id: identifier,
    name: data.name,
    description: data.description,
    place: data.place,
    date: data.date,
    startTime: data.startTime,
    endTime: data.endTime,
  });
};

const updateById = async (identifier, data) => {
  debugLog(`Updating activity with id ${identifier} ${JSON.stringify(data)}`);
  Activity.upsert({
    id: identifier,
    name: data.name,
    description: data.description,
    place: data.place,
    date: data.date,
    startTime: data.startTime,
    endTime: data.endTime,
  });
};

const deleteById = (identifier) => {
  debugLog(`Deleting activity with id ${identifier}`);
  Activity.destroy({ where: { id: identifier } });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
