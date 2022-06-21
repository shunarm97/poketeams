const { toPromise } = require('../utils/toPromise')
const authControllers = require('./auth.controllers')
const userControllers = require('../users/users.controllers')
const jwt = require('jsonwebtoken')
const config = require('../config')

const loginUser = async (req, res) => {
    if(!req.body) {
        return res.status(400).json({message:"No hay datos"})
    } else if (!req.body.email || !req.body.password) {
        return res.status(400).json({message: "No hay Email o Contraseña"})
    }
const [response, err] = await toPromise(authControllers.checkUserCredential(
        req.body.email,
        req.body.password
    ))   
if(err || !response) {
    return res.status(401).json({message:"crendenciales inconrrectas"})
} 
const [user, error] = await toPromise(userControllers.getUserByEmail(req.body.email))
if(error || !user) {
    return res.status(401).json({message: "crendenciales inconrrectas"})
}
    const token = jwt.sign({
        id: user.id,
        email: res.body.email
    },config.jwtSecret)
    res.status(200).json({token: token})
    
}

module.exports= {
    loginUser
}