const chai = require('chai')
const chaiHttp = require('chai-http')


const app = require('../../app').app

chai.use(chaiHttp)



describe('Suite de  test de integration ',() => {
    it('Sholud retunr the new Pokemon from the team of the given users',(done) => {
        chai.request(app)
        .post('/team/pokemons')
        .send({name: 'Pikachu'})
        .set("Authorization", 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3Nzd29yZCI6InJvb3QiLCJyb2wiOiIifQ.dudgMp6rx9NEvcXeY4HSphvL-Vorj0KfRflDXXlfJ8s')
        .end((err, res) => {
        /*
        {
            message: "Pokemons added succesfully on your team",
            pokemon: {
                name: "Pikachu"
            }
        }
         */  
        chai.assert.equal(res.status, 201)     
        chai.assert.equal(res.body.message, "Pokemons added succesfully on your team")     
        chai.assert.property(res.body.pokemon, "name")     
        chai.assert.equal(res.body.pokemon.name, "Pikachu")     
        done()
        })
    })
})