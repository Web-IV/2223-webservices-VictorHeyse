module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Participants", [
      {
        activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f71",
        userId: 1,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
      },
      {
        activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
        userId: 2,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f82",
      },
      {
        activityId: "c52bde46-9594-4a37-b9b3-01af8cd29f73",
        userId: 3,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f92",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Participants", null, {});
  },
};
