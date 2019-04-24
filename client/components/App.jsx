import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import Footer from './Footer' ;
import Buttons from './Button';
import Zoom from 'react-reveal/Zoom';
import Path from './Path';
import mainTitle from '../../data/Titles';



const App = () => {
  return (
    <div>
     
    <div className="header">
    <header>
      <img src="https://www.police.govt.nz/sites/all/themes/twbs_police/logo.png" alt=""/>
      <h1>
      <Zoom>
        <p></p>
      <div className="Title" >
      <h1>
     Community Service App
      </h1>
      </div>
      <p></p>
      </Zoom>
       <br/>
      </h1>
     </header>
    </div>
    
    <p></p>
    <Grid />
    <p></p>
    {/* <Buttons/> */}
    <p></p>
    <Footer/>
    </div>
  )
  
}
  


// class App extends React.Component {
//   constructor(props){
//     super(props)

//     this.state={
//       FamilyService:[{}]
//     }
  
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.mainTitle = 'mainTitle';
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.mainTitle = '';
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}></button>
//         <p>{this.mainTitle}</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <APP />,
//   document.getElementById('root')
// );

export default App 

