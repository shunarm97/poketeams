# POKE-TEAMS

## Routes

```javascript
// Users
'/users'
// Teams
'/team'
// Auth
'/auth'
```

### Users 

```javascript
const URL_BASES= '/users'

GET '/users'
GET 'users:id'
POST '/users'
PUT '/users:id'
DELETE '/users:id'

```

### Teams -> Pokemons

```javascript
const URL_BASES= '/team'

GET '/team'
POST '/team'
POST '/team/pokemons'
PUT '/team/pokemons/:id'
DELETE '/team/pokemons/:id'

```