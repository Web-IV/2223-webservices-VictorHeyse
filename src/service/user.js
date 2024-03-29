const User = require("../../models/user");
const ServiceError = require("../core/serviceError");
const { getLogger } = require("../core/logging");

const debugLog = (message, meta = {}) => {
  if (!this.logger) this.logger = getLogger();
  this.logger.debug(message, meta);
};

const getAll = async () => {
  debugLog("Fetching all users");
  return await User.findAll({
    raw: true,
  });
};

const getById = async (id) => {
  debugLog(`Fetching User ${id}`);
  const user = await User.findAll({
    where: {
      id: id,
    },
    raw: true,
  });

  if (!user || user.length === 0) {
    throw ServiceError.notFound(`There is no User with id ${id}`);
  }
  return user;
};

const register = async (data) => {
  debugLog(`Creating new User ${data.name} ${JSON.stringify(data)}`);
  const newUser = await User.create({
    name: data.name,
    auth0id: data.auth0id,
  });

  return newUser;
};

const deleteById = (id) => {
  debugLog(`Deleting User with id ${id}`);
  User.destroy({ where: { id: id } });
};

const updateById = async (id, data) => {
  debugLog(`Updating User with id ${id} ${JSON.stringify(data)}`);
  User.upsert({
    id: id,
    name: data.name,
    auth0id: data.auth0id,
  });
};

const getByAuth0Id = async (auth0id) => {
  const user = await User.findAll({
    attributes: ["id"],
    where: {
      auth0id: auth0id,
    },
    raw: true,
  });

  return user;
};

module.exports = {
  getAll,
  getById,
  register,
  updateById,
  deleteById,
  getByAuth0Id,
};
