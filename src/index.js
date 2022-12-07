const Koa = require('koa');
const koaCors = require('@koa/cors')
const config = require('config');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const activityService = require('./service/activity');
const { getLogger, initializeLogger } = require('./core/logging');

// Initializing configs
const NODE_ENV = config.get('env');
const CORS_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.maxAge');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');

// Initializing Koa
const app = new Koa();

// Defining CORS
app.use(
	koaCors({
		origin: (ctx) => {
			if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
				return ctx.request.header.origin;
			}
			// Not a valid domain at this point, let's return the first valid as we should return a string
			return CORS_ORIGINS[0];
		},
		allowHeaders: ['Accept', 'Content-Type', 'Authorization'],
		maxAge: CORS_MAX_AGE,
	})
);

const logger = getLogger();

// Initializing Router
const router = new Router();

// Defining routes
router.get('/api/activities', async (ctx) => {
  logger.info(JSON.stringify(ctx.request));
		ctx.body = activityService.getAll();
})

router.post('/api/activities', async (ctx) => {
  activityService.create();
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(bodyParser());

logger.info(`🚀 Server listening on http://localhost:9000`);
app.listen(9000);