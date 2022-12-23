module.exports = {
  log: {
    level: "development",
    disabled: false,
  },

  cors: {
    origins: ["http://localhost:3000"],
    maxAge: 3 * 60 * 60,
  },
  database: {
    user: "root",
    pswrd: "root",
    db: "localhost",
    host: "localhost",
    dialect: "mysql",
    port: "3306",
  },

  auth: {
    jwksUri: "AUTH_JWKS_URI",
    audience: "AUTH_AUDIENCE",
    issuer: "AUTH_ISSUER",
    userInfo: "AUTH_USER_INFO",
  },

  port: 9000,
};
