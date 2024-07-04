import React, { useEffect, useState } from 'react'

const MaxCount = () => {
    const[timer,setTimer]=useState(6);
    const[count,setCount]=useState(0);
   
       useEffect(()=>{
   const interval= setInterval(()=>{
            if(timer>0)
            {
                setTimer(timer-1)
            }
            else{
                clearInterval(interval)
            }
            },1000);
            return ()=>clearInterval(interval)
       },[timer])
       const Increment=()=>{
        if(timer===0)
        {
            setCount(0)
        }
        else{
            setCount(count+1)
        }
       }
    
  return (
    <div style={{backgroundColor:"gray",color:"white"}}  className="border d-flex flex-column w-75 m-auto p-3 mt-5">
        <h1>No of Clicks until timer expires</h1>
    <div style={{backgroundColor:"lightgray"}} className="border d-flex flex-column w-50 m-auto p-3 mt-5">
     <h1>{count}</h1>
    <h1>Time left:{timer}seconds</h1>
    <button className='w-25 btn btn-primary' onClick={Increment}>+</button>
    </div>
    </div>
  )
}

export default MaxCount