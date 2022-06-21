const getTeam = (req, res) => {
    console.log('Accessing teams pokemons')
    res.status(200).json('all team the user')
}
const getPokemonTeam = (req, res) => {
    console.log('Accessing teams pokemons')
    res.status(200).json('team the user')
}
const createNewTeam= (req, res) => {
    req.send({
        ...body
    })
    res.status(201).json('creates new team')
}
module.exports = {
    getTeam,
    getPokemonTeam,
    createNewTeam
}