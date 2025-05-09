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

// show 1 ...
const Show = () => {
    useEffect(() => {
        let i = 0;
        let interval = setInterval(() => {
            console.log(i++);
            if (i > 5) {
                clearInterval(interval);
                console.log("Interval Cleared");
            }
        }, 1000);

        // Cleanup function to ensure the interval is cleared when the component unmounts
        return () => {
            clearInterval(interval);
            console.log("Interval Cleared on Unmount");
        };
    }, []);

    return (
        <div>
            <h1>Show</h1>
        </div>
    );
};

// Else use  SHow Comp 22...
// const Show=()=>{
//   useEffect(()=>{
//     console.log("Component mounted");
//     return (()=>{
//       console.log("Unmounted")
//     })
//   })
  
//   return(
//     <>
//     <h1>Show Component</h1>
//     </>
//   )
// }

// uses :-- time triggers
//2.creating websockets
//subscribing to events in the dom
// other stnady eventy;
