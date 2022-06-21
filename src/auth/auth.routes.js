const router = require('express').Router()
const authHttpHander = require('./auth.http')

router.route('/login')
        .post(authHttpHander.loginUser)


module.exports = {
    router
}