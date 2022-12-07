const Koa = require('koa');
const config = require('config');
const { getLogger, initializeLogger } = require('./core/logging')

async function main() {

// Initializing configs
const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled')


// Initialize logger
initializeLogger({
    level: LOG_LEVEL,
    disabled: LOG_DISABLED,
    defaultMeta: {
      NODE_ENV
    },
  });

// Initializing Koa
const app = new Koa();
const logger = getLogger();

app.use(async (ctx, next) => {
    ctx.body = 'Hello World'
    next();
});

logger.info(`🚀 Server listening on http://localhost:9000`);
app.listen(9000);

}

main()