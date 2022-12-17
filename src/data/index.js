const config = require("config");
const { Sequelize } = require("sequelize");

const DATABASE = config.get("db");
const USERNAME = config.get("user");
const PASSWORD = config.get("pswrd");
const HOST = config.get("host");
const DIALECT = config.get("dialect");
const PORT = config.get("port");

let sequalizeInstance;

async function initializeData() {
  // Connecting to database
  sequalizeInstance = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT,
  });

  // testing connection
  async function dbAuthenticate() {
    try {
      await sequalizeInstance.authenticate();
      console.log(
        "info: Connection with database has been established successfully."
      );
    } catch (error) {
      console.error("info: Unable to connect to the database:", error);
    }
  }

  dbAuthenticate();
}

// getter voor sequalize-instantie
function getSequelize() {
  if (!sequalizeInstance)
    throw error("Instance of Sequelize was not found/not created");
  return sequalizeInstance;
}

module.exports = {
  getSequelize,
  initializeData,
};
