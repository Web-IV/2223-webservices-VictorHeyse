module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Victor",
        auth0id: "unknown",
      },
      {
        name: "Thomas",
        auth0id: "unknown",
      },
      {
        name: "Emile",
        auth0id: "unknown",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
