const { DataTypes } = require("sequelize");
const db = require("../src/data/index");

const Participant = db.define(
  "Participant",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Participant;
