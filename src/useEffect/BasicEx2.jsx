import React, { useEffect, useState } from 'react'

const BasicEx2 = () => {
    const [show, setShow] = useState(false);
 

  
  

 

  return (
    <div>
        <hr/>
      <button onClick={()=>setShow(!show)}>show</button>
      {
        show&& <Show/>   }
    </div>
  )
}

export default BasicEx2;


const Show=()=>{

       useEffect(()=>{
       let i=0;
      let Interval=  setInterval(()=>{
            console.log(i++)
        },1000)

        return ()=> {
            console.log("Interval Cleared")
         clearInterval(Interval)
            
    }

    },[])
    return(
        <div>
         <h1>Show</h1>
            
        </div>
    )
}

// uses :-- time triggers
//2.creating websockets
//subscribing to events in the dom
// other stnady eventy;