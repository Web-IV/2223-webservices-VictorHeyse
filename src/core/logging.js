const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({silent: false})
  ]
});

module.exports.getLogger = () => logger;