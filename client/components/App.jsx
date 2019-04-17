import React from 'react'

import {getPokemonList} from '../../api'











class App extends React.Component {
  constructor(props){
    super(props)
    this.setState={
      pokemon:this.props 
    }
  }

componentDidMount(){
  getPokemonList(this.renderPokemon)
}

renderPokemon (err,pokemon){
  console.log(pokemon.results[0].name)
  
  

}

  render(){
      return (
        <div>
        <h1>Pokemon!</h1>
        <ul>
          <li>{this.}</li>
          <li></li>
          <li></li>
        </ul>
        </div>
      )
  }
}

export default App



// renderWidgets (err, widgets) {
//   this.setState({
//     error: err,
//     widgets: widgets || []
//   })
// }