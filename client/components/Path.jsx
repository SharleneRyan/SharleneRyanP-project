import React, {Component} from 'react'
import Zoom from 'react-reveal/Zoom'
import mainTitle from '../../data/Titles'

class Path extends Component {
 

render (){
  console.log(mainTitle)
  const title = props.mainTitle
  return (
    <div>
      <div className="grid-container" >

        <Zoom>
          <div> <p onClick="" style={{textAlign:'center'}}
          > </p>
         </div>
        </Zoom>

      </div>
    </div>
  )
}
}


export default Path