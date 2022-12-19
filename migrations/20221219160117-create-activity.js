module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Activities",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.CHAR(36),
        },
        name: {
          type: Sequelize.TEXT,
        },
        description: {
          type: Sequelize.TEXT,
        },
        place: {
          type: Sequelize.TEXT,
        },
        date: {
          type: Sequelize.DATE,
        },
        startTime: {
          type: Sequelize.TIME,
        },
        endTime: {
          type: Sequelize.TIME,
        },
      },
      {
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Activities");
  },
};
