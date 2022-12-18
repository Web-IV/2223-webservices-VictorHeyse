const Activity = require("../../models/Activity");

const getAll = async () => {
  return await Activity.findAll({
    raw: true,
  });
};

const getById = async (identifier) => {
  return await Activity.findAll({
    where: {
      id: identifier,
    },
    raw: true,
  });
};

const updateById = (identifier, data) => {
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
  Activity.destroy({ where: { id: identifier } });
};

const create = (data) => {
  console.log(data);
  // Activity.create(data);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
