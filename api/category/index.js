const router = new require('koa-router')()

router.get('/aside', async ctx => {
  ctx.body = {
    state: 1,
    data: ["推荐专区", "新品专区", "居家生活", "服饰鞋包", "美食酒水", "个护清洁", "母婴亲子", "运动旅行", "数码家电", "严选全球"]
  }
})

module.exports = router.routes()