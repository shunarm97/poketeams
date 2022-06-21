const usersControllers = require('./users.controllers')
const toPromise = require('../utils/toPromise')

const getUserData = (req, res) => {
    res.status(200).json({ message : 'vas de bien de momento'})
}   


module.exports = { 
    getUserData
}