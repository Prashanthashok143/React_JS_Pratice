import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
const Progress = () => {
  const [percent, setPercent] = useState(0);
  const now=percent;
  return (
    <div  className="border w-75 m-auto p-3 mt-5" style={{backgroundColor:"gray",color:"white"}} >
<h1>ProgressBar</h1>
      <p>Input Percentage</p>
      <input
        type="number"
        value={percent}
        onChange={(e) => setPercent(e.target.value)}
      />
   <ProgressBar style={{ paddingTop:1,paddingBottom:1,width:200,height:50,borderRadius:40,color:"red",fontSize:25,boxShadow: '1px 2px 9px #F4AAB9'}}  variant="danger" now={now} label={`${now}%`}/>
   
    </div>
  );
};

export default Progress;
