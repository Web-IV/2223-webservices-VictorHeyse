module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Activities", [
      {
        id: 1,
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        StartTime: "2021-07-01T12:32:04.534Z",
        EndTime: "2021-07-01T12:32:04.534Z",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Activities", null, {});
  },
};

// running all seeds (npx sequelize-cli db:seed:all)
// deleting all seeds (npx sequelize-cli db:seed:undo:all)
