import React, { useRef, useState } from 'react'

const Example3 = () => {
    const[user,setUser]=useState("");
    const Select =useRef(null);
    const handleSelect=()=>{
    Select.current.select();
    }
  return (
    <div>
     <input ref={Select} type="text" value={user} onChange={(e)=>setUser(e.target.value)} name="User" id="User" placeholder='UserEnter' />   
    <button onClick={handleSelect}>Select</button>
    </div>
  )
}

export default Example3