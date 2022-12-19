module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Participants",
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
