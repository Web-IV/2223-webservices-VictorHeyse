const Activity = require("../../models/Activity");
const { getLogger } = require("../core/logging");

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getLogger();
  this.logger.debug(message, meta);
};

const getAll = async () => {
  debugLog("Fetching all transactions");
  return await Activity.findAll({
    raw: true,
  });
};

const getById = async (identifier) => {
  debugLog(`Fetching activity with id ${identifier}`);
  return await Activity.findAll({
    where: {
      id: identifier,
    },
    raw: true,
  });
};

const create = (data) => {
  debugLog("Creating new activity", newActivity);
  console.log(data);
  // Activity.create(data);
};

const updateById = (identifier, data) => {
  debugLog(`Updating activity with id ${identifier}`);
  Activity.upsert({
    id: identifier,
    name: data.name,
    description: data.description,
    place: data.place,
    Date: data.date,
    StartTime: data.StartTime,
    EndTime: data.EndTime,
  });
};

const deleteById = (identifier) => {
  debugLog(`Deleting activities with id ${identifier}`);
  Activity.destroy({ where: { id: identifier } });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
