const bcrypt = require('bcrypt')

const hashedPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
} 

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashedPassword,
    comparePassword
}
