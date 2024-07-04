import React, {useMemo, useState } from 'react'

const Example2 = () => {
    const[name,setName]=useState("");
    const [count,setCount]=useState(0)
    const Factorial=(value)=>{
        let result=1;
        console.log(result)
        for (let index = 1; index <=value; index++) {
             
            result*=index;
        }
        return result
    }
    const CalltheFact=useMemo(()=>Factorial(count),[count]);
  return (
    <div>
        <h1>The Factorial of {count} is {CalltheFact}</h1>
     <button onClick={()=>setCount(count+1)} className='btn btn-primary'>Increment</button>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count-1)} className='btn btn-dark'>Decrement</button>
        <hr/>
        <input type="text" name="name" id="name" autoComplete='off' value={name} onChange={(e)=>setName(e.target.value)} />
        <h1>Name:{name}</h1>
    </div>
  )
}

export default Example2