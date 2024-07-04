import React, { useEffect, useState } from 'react'

const Callback = ({GetItems}) => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
      setItems(GetItems)
      console.log(GetItems)
      console.log("u")
    },[GetItems])
  return (
    <div>
    {items.map((value)=>(
    <li key={value}>{value}</li>
    ))}    
    </div>
  )
}

export default Callback