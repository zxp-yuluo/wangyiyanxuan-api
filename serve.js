const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
 ctx.set('Access-Control-Allow-Origin', '*');
 await next();
});

router.use('/api',require('./api/index'))

app.listen(1992, () => {
	console.log("服务启动在http://localhost:1992")
});

app
  .use(router.routes())
  .use(router.allowedMethods());