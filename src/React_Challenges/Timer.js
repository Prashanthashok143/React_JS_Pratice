import React from "react";

const Timer = () => {
  const [count, setCount] = React.useState(0);
  const StartTimer = () => {
window.Timer=setInterval(() => {
  setCount((count)=>count+1)
 }, 1000);
  };


  const ResetTimer=()=>{
  
    setCount(0);
  }
  const StopTimer = () => {
    clearInterval(window.Timer);
    console.log(window)
  };

  return (
    <div className="border w-75 m-auto p-3 mt-5" style={{backgroundColor:"gray",color:"white"}} >
    <h1>Timer</h1>
     <span>{Math.trunc(count/60)}</span>mins
      <span> {count%60}</span> secs
     
      <button className="btn btn-primary w-25" onClick={StartTimer}>Start</button>
      <button className="btn btn-danger w-25"  onClick={StopTimer}>stop</button>
      <button className="btn btn-success w-25"  onClick={ResetTimer}>Reset</button>
    </div>
  );
};
export default Timer;
