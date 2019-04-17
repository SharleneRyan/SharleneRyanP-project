import React from 'react'

import {getPokemonList, getPokemonByName} from '../../api'



class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      pokemon:[{}]
    }
  this.renderPokemon = this.renderPokemon .bind(this)  
  }
  



componentDidMount(){
  getPokemonList(this.renderPokemon)
this.renderPokemon 
}


renderPokemon (err,data){
  console.log(data)
  this.setState({
    pokemon:data.results,
    
  })
}

// getPokemonByName(name,data = connection){
//   return('pokemon')
    // .insert({
//      name: results.name,
//      instock: pokemon.results
    // })
// } 




  render(){
      return (
        <div>
        <h1>Pokemon!</h1>
        <ul>
          {this.state.pokemon.map((pokemon,index) => <li key={index}> {index}. {pokemon.name}</li>)}
          <li></li>
          <li></li>
        </ul>
        </div>
      )
  }
}

export default App



