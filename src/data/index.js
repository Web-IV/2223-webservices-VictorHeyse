const { Sequelize } = require("sequelize");
const config = require("config");

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
});
