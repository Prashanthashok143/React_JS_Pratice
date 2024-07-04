import React, { useEffect, useState } from 'react'

const BasicEx3 = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <div>
        <hr/>
        {
            toggle && <Show/>
        }
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default BasicEx3;

const Show=()=>{
    useEffect(()=>{
        return ()=> alert("Window Closed");
        // if we return a function within the method,this 
        //function will excute when the component gets 
        //unmounted
    });
    useEffect(()=>{
        alert("Whindow Opened")
    })
    return(
        <div>
         Opened   
        </div>
    )
}