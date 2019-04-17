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

// export function getPokemonByName (name, callback) {
//   request
//     .post(pokemonUrl)
//     .send(pokemon)
//     .end((err, res) => {
//       callback(err)
//     })
// }

// export function deleteWidget (widget,callback){
//   request
//   .del(widgetUrl)
//   .send(widget)
//   .end((err, res) => {
//     callback(err)
      
//   })
// }

// export function updateWidget(widget,callback){
//   request
//   .put(widgetUrl)
//   .send(widget)
//   .end((err, res) => {
//     callback(err)
      
//   })

// }