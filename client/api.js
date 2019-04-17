import request from 'superagent'


const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

export function getPokemon (callback) {
    console.log('getting Pokemon')
    request
    .get(pokemonUrl)
    .end((err, res) => {
      console.log('got Pokemon')
      callback(err, res.body)
    })
}

export function getPokemonByName (name, callback) {
  request
    .get(pokemonUrl + name)
    .end((err, res) => {
      callback(err, res.body)
    })
}