import React from 'react'

import {getPokemon} from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: []
    }

    this.renderPokemon = this.renderPokemon.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount')
    getPokemon(this.renderPokemon)
  }

  renderPokemon(err, data) {
    console.log('rendering Pokemon')
    this.setState({
      pokemon: data.results
    })
  }

  render() {
    console.log('render')
    return (
      <div>
      <h1>Pokemon</h1>
      <h2>I have {this.state.pokemon.length} Pokemon!</h2>
      {this.state.pokemon.map(p => {
        return (
          <li><a href={p.url}>{p.name}</a></li>
        )
      })}
      </div>
    )
  }
}

export default App

