const winston = require("winston");
const { combine, timestamp, colorize, printf } = winston.format;

let logger;

const loggerFormat = () => {
  const formatMessage = ({ level, message, timestamp, ...rest }) =>
    `${timestamp} | ${level} | ${message} | ${JSON.stringify(rest)}`;

  const formatError = ({ error: { stack }, ...rest }) =>
    `${formatMessage(rest)}\n\n${stack}\n`;
  const format = (info) =>
    info.error instanceof Error ? formatError(info) : formatMessage(info);
  return combine(colorize(), timestamp(), printf(format));
};

module.exports.getLogger = () => {
  if (!logger) throw new Error("You must first initialize the logger");
  return logger;
};

module.exports.initializeLogger = ({
  level,
  disabled,
  defaultMeta = {},
  extraTransports = [],
}) => {
  logger = winston.createLogger({
    levels: {
      error: 0,
      debug: 1,
      info: 2,
    },
    defaultMeta,
    format: loggerFormat(),
    transports: [
      new winston.transports.Console({
        silent: disabled,
        level: level,
      }),
      ...extraTransports,
    ],
  });

  logger.info(`Logger initialized with minimum log level ${level}`);
};
