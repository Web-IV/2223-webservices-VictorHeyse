module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Activities", [
      {
        id: 1671456238303,
        name: "Pretparkactiviteit",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        Date: "2021-07-01",
        StartTime: "00:00:00",
        EndTime: "00:00:00",
      },
      {
        id: 1671456368171,
        name: "Test 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, m.",
        place: "lokaal klj",
        Date: "2021-07-01",
        StartTime: "00:00:00",
        EndTime: "00:00:00",
      },
      {
        id: 1671456368172,
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
