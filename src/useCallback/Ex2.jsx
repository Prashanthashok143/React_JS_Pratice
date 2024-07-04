import React, { memo, useEffect, useState } from "react";

const Ex2 = ({ Data }) => {
   const [array,setArray]=useState([]);
   useEffect(()=>{
    setArray(Data)
    console.log("Items Rendering")
   },[Data])
  return (
    <div>
      {array.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default memo(Ex2);
