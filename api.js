import request from 'superagent'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'


export function getPokemonList (callback) {
  console.log(pokemonUrl)
  request
    .get(pokemonUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function getPokemonByName (name, callback) {
  request
    .post(pokemonUrl)
    .end((err, res) => {
      console.log('got Pokemon')
      callback(err,res.body)
    })
}

// export function deletePokemon (Pokemon,callback){
//   request
//   .del(PokemonUrl)
//   .send(Pokemon)
//   .end((err, res) => {
//     callback(err)
      
//   })
// }

// export function updatePokemon(pokemon,callback){
//   request
//   .put(PokemonUrl)
//   .send(Pokemon)
//   .end((err, res) => {
//     callback(err)
      
//   })

// }