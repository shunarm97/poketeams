const chai = require('chai')
const chaiHttp = require('chai-http')

const {describe, it} = require('mocha')
const app = require('../../app').app

chai.use(chaiHttp)
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

describe('Suite de create new User ', () => {
    it('Should create new user', (done) => {
        chai.request(app)
        .post('/api/v1/users')
        .set("content-type", "application/json")
        .send({
            email: "admin@admin.com",
            password: "1234",
            username:"admin",
            age:25
        })
        .end((err, res) => {
            chai.assert.equal(res.status, 201)
            done()
        })
    })
})