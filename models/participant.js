const { DataTypes } = require("sequelize");
const db = require("../src/data/index");

const Participant = db.define(
  "Participant",
  {
    activityId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recordId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Participant;
