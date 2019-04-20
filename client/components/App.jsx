import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid'
import Footer from './Footer' 
import Buttons from './Button';


const App = () => {
  return (

    <div>
    <h1>COMMUNITY SERVICE APP</h1>
    <Grid/>
    <Buttons/>
    <Footer/>
    </div>
  )
  
}
  
// render() {
//     return (
//       <div>
//       <h1>COMMUNITY SERVICE APP</h1>
//       <ul>
//         {this.state.FamilyServer.map((FamilyServer,index) => <li key={index}> {index}. {this.Capitalize(`${FamilyServer.name}`)}</li>)}
//         <li></li>
//         <li></li>
//       </ul>
//       </div>
//     )
//   }


// class App extends React.Component {
//   constructor(props){
//     super(props)

//     this.state={
//       FamilyService:[{}]
//     }
  
//   }
// }


export default App

