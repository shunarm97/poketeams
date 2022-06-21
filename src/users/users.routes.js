const router = require('express').Router()
const userHttpHander = require('./users.http')
const passport = require('passport')
require('../utils/')(passport)


router.route('/perfil')
        .get(passport.authenticate('jwt', {session: false}),
        userHttpHander.getUserData
        )


module.exports = {
    router
}