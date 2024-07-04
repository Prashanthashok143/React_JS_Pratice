import React, { useMemo, useState } from "react";

const Example = () => {
  const [inputData, setInputData] = useState("");
  const [True,setTrue]=useState(false);
  const [num,setNum]=useState(0)
  const double=useMemo(()=>(slowRunning(num)),[num])
  const handleTheme=()=>{
    console.log("Theme Changed")
    setTrue(!True)
   
  }
  const handleInc=()=>{
    setNum(num+1)
  }
  const colorSet={
    backgroundColor:True?"black":"white",
    color:True?"white":"black"
  }
  return (
    <div>
     <h1 style={colorSet}>useMemo Example</h1>   
      <input
        type="text"
        name="input"
        id="inpu"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={handleTheme}>Change Theme</button>

     <h3>{num}:{double}</h3>
     <button onClick={handleInc}>Increment</button>
    </div>
  );
};

const slowRunning =(num)=>{
    for (let i=0;i<1000000000;i++) {
    
        
    }
    return num*num;  
}

export default Example;
