const chai = require('chai')
const chaiHttp = require('chai-http')

const {describe, it} = require('mocha')
const app = require('../../app').app

chai.use(chaiHttp)

describe('Suite del Auth de Users', () => {
    it('Should return cuando no hay validacion', (done) => {
        chai.request(app)
        .get('/api/v1/post')
        .end((err, res) => {
            chai.assert.equal(res.status, 401)
            done()
        })
    })
    it('Sholud return 200 ')
})