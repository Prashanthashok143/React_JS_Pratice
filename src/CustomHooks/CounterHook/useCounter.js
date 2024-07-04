import { useState } from 'react'

const useCounter = () => {
  const [count,setCount]=useState(0);
  const Increment=()=>{
    setCount(count+1)
    document.title = `Increment: ${count}`;
  
  }
  const Decrement=()=>{
    setCount(count-1)
    document.title = `Decrement: ${count}`;

  }
  const Reset=()=>{
    setCount(0)
    document.title = `Reset: ${count}`;
  }
  return [count,Increment,Decrement,Reset];
}

export default useCounter