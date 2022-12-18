const { getSequelize } = require("../data");
const db = require("../data/index");
const Activity = require("../../models/Activity");

const getAll = async () => {
  return await Activity.findAll({
    raw: true,
  });

  // // mock data voor front end
  // const data = [
  //   {
  //     id: 1,
  //     name: "Pretparkactiviteit",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
  //     place: "lokaal klj",
  //     StartTime: "2021-07-01T12:32:04.534Z",
  //     EndTime: "2021-07-01T12:32:04.534Z",
  //   },
  //   {
  //     id: 2,
  //     name: "Testactiviteit",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     place: "hogent",
  //     StartTime: "2022-09-02T12:32:04.534Z",
  //     EndTime: "2022-09-02T12:32:04.534Z",
  //   },
  //   {
  //     id: 2,
  //     name: "Testactiviteit2",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  //     place: "thuis",
  //     StartTime: "2022-09-02T12:32:04.534Z",
  //     EndTime: "2021-07-01T12:32:04.534Z",
  //   },
  // ];
  // return data;
};

const getById = () => {
  const sequelize = getSequelize();
  throw new Error("not implemented yet");
};

const create = () => {
  const sequelize = getSequelize();
  throw new Error("not implemented yet");
};

const updateById = () => {
  const sequelize = getSequelize();
  throw new Error("not implemented yet");
};

const deleteById = () => {
  const sequelize = getSequelize();
  throw new Error("not implemented yet");
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
