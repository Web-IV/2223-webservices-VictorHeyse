module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Participants", [
      {
        id: 16714,
        userId: 111,
      },
      {
        id: 16715,
        userId: 112,
      },
      {
        id: 16716,
        userId: 113,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Activities", null, {});
  },
};
