import React, { useCallback, useState } from 'react'
import Ex2 from './Ex2'

const Ex1 = () => {
    const[num,setNum]=useState(0)
    const[theme,setTheme]=useState(false);
    const ListofItems=useCallback(()=>{
        return [num*2,num*4] 
    },[num]);

    
  return (
    <div>
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />  
    <h1>{num}</h1> 
    <button onClick={()=>setTheme(!theme)} className={theme ? "btn btn-primary" : "btn btn-dark"} >theme</button>
    <Ex2 Data={ListofItems}/> 
    </div>
  )
}

export default Ex1