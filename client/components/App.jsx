import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './Grid'
import Footer from './Footer' 
import Buttons from './Button'
import Zoom from 'react-reveal/Zoom'

const App = () => {
  return (

    <div>

      
    <div className="header">
    <header>
      <img src="https://www.police.govt.nz/sites/all/themes/twbs_police/logo.png" alt=""/>
      <h1>
      <p></p>
      <Zoom>COMMUNITY SERVICE APP</Zoom>
      <p></p>
      <br/>
      </h1>
      <img src="" alt=""/>
      </header>
    </div>
    
    <p></p>
    <Grid/>
    <p></p>
    {/* <Buttons/> */}
    <p></p>
    {/* <Footer/> */}
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

