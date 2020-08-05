const router = new require('koa-router')()

router.use('', require('./home/index.js'))
router.use('/category', require('./category/index.js'))
router.use('/detail', require('./detail/index.js'))
// router.use('/login', require('./login/index.js'))
// router.use('/register', require('./register/index.js'))
// router.use('/profiles', require('./profiles/index.js'))


module.exports = router.routes()