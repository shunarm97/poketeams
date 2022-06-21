const crypto = require('../utils/crypto')
const uuid = require('uuid')



const userDB = []

/*
    userDB = [
        1: {
            userId: ,
            email: "",
            password: "",
            username: "",
            age:
        }
        
    ]

*/
const registerUser = (data) => {
    const hashedPassword = crypto.hashedPassword(data.password)
    const userId = uuid.v4()
    const newUser = {
        id : userId,
        ...data,
        password: hashedPassword,
    }
    userDB.push(newUser)
    return {
        message: `User created the id ${userId}`,
        user: newUser
    }

}
const getAllUsers = async() => {
    const users = await userDB.users.findAll({
        attributes : {
            exclude:["password"] 
        }
    })
    return{
        message: "todos los usuarios",
        users
    }
}

const getUserByEmail = async(email) => {
    const user = await userDB.users.findAll({
        where: {
            email
        }
    })
    return user
}

const deleteUserId = async (id) => {
    const deleteUser = await Number(userDB.users.filter(id))
    const deleteUserComplete = await userDB.deleteTodo(deleteUser)

    return deleteUserComplete 
}

module.exports = { 
    getAllUsers,
    registerUser,
    getUserByEmail,
    userDB,
    deleteUserId
}