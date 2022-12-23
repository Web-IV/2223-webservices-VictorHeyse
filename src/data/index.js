const { Sequelize } = require("sequelize");
const config = require("config");
const { getLogger } = require("../core/logging");

const DATABASE = config.get("database.db");
const USERNAME = config.get("database.user");
const PASSWORD = config.get("database.pswrd");
const HOST = config.get("database.host");
const DIALECT = config.get("database.dialect");
const PORT = config.get("database.port");

module.exports = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: PORT,
  logging: function (str) {
    const logger = getLogger();
    logger.debug(str);
  },
});
