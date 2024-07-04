import React, { useCallback, useMemo, useState } from 'react'
import Callback from './Callback';

const Memo = () => {
    const[counter,setCounter]=useState(0);
    const[bgcolor,setBgcolor]=useState(false)
    const GetItems=(counter)=>{
        
            return [counter,counter+1,counter+2]
            
        
    }
    const MemoValue=useMemo(()=> GetItems(counter),[counter]);
  
  
  return (
    <div>
     <input type='text' value={counter} onChange={(e)=>setCounter(e.target.value)}/>
     <button onClick={()=>  setBgcolor(!bgcolor) } style={{backgroundColor:bgcolor?"red":"yellow"}}>GetData</button>  
     <Callback GetItems={MemoValue}/> 
    </div>
  )
}

export default Memo;