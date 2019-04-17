import React from 'react'
import * as api from '../api'


export default class App extends React.Component{
 constructor (props) {
   super(props)
     this.state ={
       error:null,
       data: this.props
      }
   }

   componentDidMount(){
    api.getData(this.renderData)
   }

   renderData(err, data){
     console.log(recipes)
   }

  render(){
    returns
  }
 }



