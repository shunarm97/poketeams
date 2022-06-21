const { userDB } = require("../users/users.controllers")

const uuid = require(uuid)


const teamsDB = []
  
/*
    teamsDB = [
        idteam: "",
        nameteams: "",
        pokemons: [],
        idUser: ,

    ]
*/

// Crear el team para el usuario
const createTeam = async (idUser, data) => {
    const idTeam = uuid.v4()
    const createTeam = await idUser.create({
        idTeam : idTeam,
        ...data
    })
    teamsDB.push(createTeam)
    return {
        message: `User created new teams of user ${createTeam.idUser}`,
        team: createTeam
    }

}

// mostrar los teams 
const getTeams = async () => {
    const getTeams = await teamsDB.findAll()
    return getTeams
}


// Añadir los pokemons
const addPokemons = async (idTeam, pokemon) => {
    const selectTeam = await teamsDB.idTeam.findAll(idTeam)
    const addPokemon  = await selectTeam.pokemon.create({
        pokemon: pokemon
    })
    teamsDB.selectTeam.pokemon.push(addPokemon)
    return {
        message: `Add news pokemons ${teamsDB.idTeam}`,
        team: createTeam
    }
}   

// mostar los pokemones del team 
const getPokemonTeam = async (idTeam) => {
    const team = await teamsDB.findByPk(idTeam)
    return {
        message: `Pokemons the teams ${team}`,
        pokemons : team.pokemons
    }

}

// eliminar un pokemon de un team 
const deletePokemonTeam = async (idTeam, pokemon) => {
    const selectTeam = await teamsDB.idTeam.findByPk(idTeam)
    const deletePokemon = await selectTeam.pokemons.slice(pokemon)
    return {
        message: `Delete pokemon ${pokemon} of team ${idTeam}`,
        newArrayPokemons: deletePokemon
    }
}

// eliminar team 
const deleteTeam = async (idTeam) => {
    const deleteTeam = await teamsDB.slice(idTeam)
    return {
        message: `Delete team ${idTeam}`,
        newArrayTeams: deleteTeam
    }
}

module.exports = {
    createTeam,
    addPokemons,
    getPokemonTeam,
    deletePokemonTeam,
    deleteTeam,
    getTeams
}