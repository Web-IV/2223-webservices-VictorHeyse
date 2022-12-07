const Koa = require('koa');

app.use(async ctx => {
    ctx.body = 'Hello World'
})

const app = new Koa();