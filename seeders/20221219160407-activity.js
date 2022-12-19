module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Activities", [
      {
        id: "c52bde46-9594-4a37-b9b3-01af8cd29f71",
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        Date: "2021-07-01",
        StartTime: "00:00:00",
        EndTime: "00:00:00",
      },
      {
        id: "c52bde46-9594-4a37-b9b3-01af8cd29f72",
        name: "Test 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        Date: "2021-07-01",
        StartTime: "00:00:00",
        EndTime: "00:00:00",
      },
      {
        id: "c52bde46-9594-4a37-b9b3-01af8cd29f73",
        name: "Test 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        Date: "2021-07-01",
        StartTime: "00:00:00",
        EndTime: "00:00:00",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Activities", null, {});
  },
};
