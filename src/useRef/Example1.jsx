import React, { useEffect, useRef, useState } from "react";

const Example1 = () => {

  const [change,setChange]=useState("");
  const Focus=useRef(null)
  const count= useRef(0)

  useEffect(()=>{
    count.current=count.current+1;
    Focus.current.focus();
  })

  return (
    <div>
      <input
      ref={Focus}
        type="text"
        value={change}
       onChange={(e)=>setChange(e.target.value)}
        name=""
        id=""
      />
      <h4>{count?.current}</h4>

    </div>
  );
};

export default Example1;
