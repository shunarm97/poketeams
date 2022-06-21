const router = require('express').Router()
const teamsControllers = require('./teams.controllers')
const teamHttpHandel = require('./teams.http')

router.route('/teams')
        .get(teamsControllers.getTeams, teamHttpHandel.getTeam)

router.route('/teams:idteams')
        .get(teamsControllers.getPokemonTeam,  teamHttpHandel.getPokemonTeam)


router.route('/teams')
        .post(teamsControllers.createTeam,  teamHttpHandel.createNewTeam)


module.exports ={
    router
}