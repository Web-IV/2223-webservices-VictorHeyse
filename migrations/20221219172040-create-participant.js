module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Participants",
      {
        activityId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        recordId: {
          type: Sequelize.CHAR(36),
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Participants");
  },
};
