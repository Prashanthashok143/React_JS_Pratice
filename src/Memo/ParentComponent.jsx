import React, { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComponent = () => {
    console.log("Parent")
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>ParentComponent</h1>
    <h1>{count}</h1>

<button onClick={handleClick}>Click Event</button>

    <ChildComp name={"Prashanth"}/>    
    </div>
  )
}

export default ParentComponent