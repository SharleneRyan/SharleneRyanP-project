import React, {Component} from 'react'
import Zoom from 'react-reveal/Zoom'
// import {Titles} from './Titles'

class Grid extends Component {

  state={
  Title:['Maori Services','Government Services','Youth Services','Social Services']
}


render (){
  return (
    <div>


      <div className="grid-container" >

        <Zoom>
          <div> <p style={{
            textAlign:'center'
          }}> {this.state.Title[0]}</p>
         </div>
        </Zoom>
        <Zoom>
          <div><p style={{
            textAlign:'center'
          }}>{this.state.Title[1]}</p> </div>
        </Zoom>
        <Zoom>
          <div><p style={{
            textAlign:'center'
          }}
          >{this.state.Title[2]}</p> </div>
        </Zoom>
        <Zoom>
          <div>
          <p style={{
            textAlign:'center'
          }}
          >{this.state.Title[3]}</p></div>
        </Zoom>

      </div>
    </div>
  )
}
}

export default Grid