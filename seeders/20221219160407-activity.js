module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Activities", [
      {
        id: "781af455-493e-436d-ba21-220eb6f17cc7",
        name: "Sintactiviteit",
        description:
          "Zijn er dit jaar alleen maar brave kindjes? Kom naar de sinterklaas-activiteit voor een dag vol plezier!",
        place: "Lokaal",
        date: "2022-12-04 00:00:00",
        StartTime: "14:00:00",
        EndTime: "17:00:00",
      },
      {
        id: "7b10e109-c06a-4023-971e-3c098ba96d4c",
        name: "Gewest: schaatsen",
        description:
          "Op 13 november gaan we gaan schaatsen samen met de andere kljs van ons gewest. Hiervoor trekken we naar de kristallijn.",
        place: "Lokaal",
        date: "2022-11-13 00:00:00",
        StartTime: "13:30:00",
        EndTime: "17:00:00",
      },
      {
        id: "9c46ace8-1240-467d-801a-fd78fb4e8ea7",
        name: "O learys",
        description: "Eat, drink, bowl, repeat.",
        place: "Gent",
        date: "2022-12-23 00:00:00",
        StartTime: "20:30:00",
        EndTime: "23:00:00",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Activities", null, {});
  },
};
