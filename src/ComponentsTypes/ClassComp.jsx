import React, { Component } from 'react'
import FunctionComp from './FunctionComp'

class ClassComp extends Component {
   
  render() {
    return (
      <div>
        <h1>ClassComp</h1>
        <h1>{this.props.name}</h1>
        <FunctionComp name="Prashanth"/>
      </div>
    )
  }
}

export default ClassComp