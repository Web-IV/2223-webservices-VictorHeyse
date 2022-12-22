module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Participants", [
      {
        activityId: "9c46ace8-1240-467d-801a-fd78fb4e8ea7",
        userId: 1,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
      },
      {
        activityId: "9c46ace8-1240-467d-801a-fd78fb4e8ea7",
        userId: 2,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f82",
      },
      {
        activityId: "781af455-493e-436d-ba21-220eb6f17cc7",
        userId: 3,
        recordId: "c52bde46-9594-4a37-b9b3-01af8cd29f92",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Participants", null, {});
  },
};
