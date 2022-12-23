module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Victor@gmail.com",
        auth0id: "unknown",
      },
      {
        name: "Thomas@gmail.com",
        auth0id: "unknown",
      },
      {
        name: "Emile@gmail.com",
        auth0id: "unknown",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
