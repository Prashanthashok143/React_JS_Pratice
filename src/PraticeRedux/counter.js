import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
// import { Increment } from './actions';
// import { Decrement } from './actions';
import { increment } from '../ReduxToolKit/counterSlice';
import { decrement } from '../ReduxToolKit/counterSlice';
const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector((state)=>state.counterSlice.counter)
  console.log(dispatch)
  return (
    <div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    {counter}
    <button onClick={()=>dispatch(decrement())}>Decrement</button>    
    </div>
  )
}

export default Counter;