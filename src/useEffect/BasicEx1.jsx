import React, { useEffect, useState } from 'react'

const BasicEx1 = () => {
    const[count,setCount]=useState(0)
    const[iscolor,setIscolor]=useState(false)
    useEffect(()=>{
        console.log("usEffect Calling")
    },[count])
  return (
    <div>
     <button onClick={()=>setCount(count+1)}>Increment</button>   
    <h1>{count}</h1>
    <button onClick={()=>setCount(count-1)}>Decrement</button> 
    <button style={{backgroundColor:iscolor?"black":"white"}} onClick={()=>setIscolor(!iscolor)}>color</button>
    </div>
  )
}

export default BasicEx1;


// Without Dependency - it will excute every time when the component is render/re-render/mount.
//With Dependency[]     - it will excute only when component is mounted [intial phase]
//with Dependency[count,iscolor]- it will excute only when the dependencies changed.
//with return ()=>{}       - it will excute only when component is un-mounted
// Ex :-- remove eventlisteners,remove db connections.
// if we return a function within the method,this function will excute when the component gets unmounted
