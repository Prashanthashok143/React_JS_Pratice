import React, { useEffect, useRef, useState } from 'react'

const ParentComp = () => {
    const[name,setName] =useState("");
    const Count=useRef(0);
    const Focus=useRef();
    useEffect(()=>{
        Count.current=Count.current+1;
        Focus.current.focus()
    },[])
  return (
    <div>
      <input ref={Focus} type="text" value={name} on onChange={(e)=>setName(e.target.value)} />  
{Count.current}
    </div>
  )
}

export default ParentComp