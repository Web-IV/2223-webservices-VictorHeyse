const Koa = require('koa');
const config = require('config');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const { getLogger, initializeLogger } = require('./core/logging')

// Initializing configs
const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled')

// Initializing Koa
const app = new Koa();
const logger = getLogger();

// Initializing Router
const router = new Router();

// Defining routes
router.get('/api/activies', async (ctx) => {

})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(bodyParser());

logger.info(`🚀 Server listening on http://localhost:9000`);
app.listen(9000);