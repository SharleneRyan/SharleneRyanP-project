import React from 'react'

import { getCatFacts } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      catFacts: []
    }

    this.renderFacts = this.renderFacts.bind(this)
  }

  componentDidMount() {
    getCatFacts(this.renderFacts)
  }

  renderFacts(err, data) {
    this.setState({
      cat: data.results
    })
  }

  render() {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <h1>React development has begun!</h1>
//   )
// }

export default App

