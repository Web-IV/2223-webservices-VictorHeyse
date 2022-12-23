const { Sequelize } = require("sequelize");
const config = require("config");
const { getLogger } = require("../core/logging");

const DATABASE = config.get("db");
const USERNAME = config.get("user");
const PASSWORD = config.get("pswrd");
const HOST = config.get("host");
const DIALECT = config.get("dialect");
const PORT = config.get("port");

module.exports = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: PORT,
  logging: function (str) {
    const logger = getLogger();
    logger.debug(str);
  },
});
