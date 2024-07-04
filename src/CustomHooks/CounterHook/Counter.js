import React from 'react'
import useCounter from './useCounter'
// import usePageTitle from '../PageTitle/usePageTitle';

const Counter = () => {
   
    const [count,Increment,Decrement,Reset]=useCounter();
    
  return (
    <div>
   <h1> Counter value = {count}  </h1> 
     <button onClick={Increment}>Increment</button>   
     <button onClick={Decrement}>Decrement</button> 
     <button onClick={Reset}>Reset</button> 
    </div>
  )
}

export default Counter