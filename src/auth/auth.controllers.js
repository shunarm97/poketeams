const usersControllers = require('../users/users.controllers')
const crypto = require('../utils/crypto')
const { toPromise } = require('../utils/toPromise')



const checkUserCredential = async(email, password) => {
    const [user, err] = toPromise(usersControllers.getUserByEmail(email))
    if(!err && user.dataValues) {
        return crypto.comparePassword(password, user.password)
    } else {
        return null
    }
}

module.exports = {
    checkUserCredential
}