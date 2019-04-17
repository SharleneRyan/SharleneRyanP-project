import React from 'react'

import {getPokemonList, getPokemonByName} from '../../api'



class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      pokemon:[{}]
    }
  this.renderPokemon = this.renderPokemon .bind(this)  
  this.Capitalize = this.Capitalize.bind(this)
  this.getPokemonByName =this.getPokemonByName.bind(this)
  }
  



componentDidMount(){
  getPokemonList(this.renderPokemon)
this.renderPokemon 
}

Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

renderPokemon (err,data){
    console.log(data)
  this.setState({
    pokemon:data.results,
    
  })
}

getPokemonByName(name,data = connection){
  return('pokemon')
    .insert({
     name: results.name,
     instock: pokemon.results
    })
} 





  render(){
      return (
        <div>
        <h1>Pokemon!</h1>
        <ul>
          {this.state.pokemon.map((pokemon,index) => <li key={index}> {index}. {this.Capitalize(`${pokemon.name}`)}</li>)}
          <li></li>
          <li></li>
        </ul>
        </div>
      )
  }
}

export default App



