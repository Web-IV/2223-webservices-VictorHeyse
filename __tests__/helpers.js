const supertest = require("supertest");
const createServer = require("../src/createServer");
const { db } = require("../src/data");

const withServer = (setter) => {
  let server;

  beforeAll(async () => {
    server = await createServer();

    setter({
      sequelize: db,
      request: supertest(server.getApp().callback()),
    });
  });

  afterAll(async () => {
    await server.stop();
  });
};

module.exports = {
  withServer,
};
