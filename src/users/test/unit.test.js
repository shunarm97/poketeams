const { assert } = require('chai')
const { describe } = require('mocha')

const usersDB = {
    1: {
        name: 'alexander',
        email: 'alexander123@gmail.com',
        password: 'root',
        age: 25
    },
    2: {
        name: 'jose',
        email: 'jhosep123@gmail.com',
        password: '456',
        age: 20
    }
}




describe('Suite de testing unitarios de controladores de usuarios', () => {
    it('Testing to edit user', (done) => {
        const body = {
                id: 1,
                name: 'alexander',
                email: 'alexander123@gmail.com',
                password: '123',
                age: 25
        }
        const result = editUser(1, body)
        assert.equal(result.id, body.id)
        assert.equal(result.name, body.name)
        assert.equal(result.email, body.email)
        assert.equal(result.password, body.password)
        done()
    })
})