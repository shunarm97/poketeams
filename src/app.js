const express = require('express')
const router = require('./teams/teams.routes').router
const config = require('./config')
const authRouter = require('./auth/auth.routes').router
const userRouter = require('./users/users.routes').router

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "todo esta bien a la vrg todo"
    })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1', router)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

module.exports = {
    app
}
