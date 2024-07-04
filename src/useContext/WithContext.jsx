import React, { createContext, useContext } from 'react';
const context=createContext();
const WithContext = () => {
  const name="Prashanth"
  return (
   <context.Provider value={name}>
     
      <h1>{name}  </h1>
   <WithoutContext1/>
   
   </context.Provider>
  )
}

export default WithContext;




 const WithoutContext1 = () => {
  return (
    <div>
        <h2>withoutContext1</h2>
        <WithoutContext2 />
    </div>
  )
}

const WithoutContext2 = () => {
    return (
      <div>
        <h2>withoutContext2</h2>
        <WithoutContext3/>
      </div>
    )
  }

  const WithoutContext3= () => {
    const name=useContext(context)
    console.log(name)
    return (
      <div>
        <h2>withoutContext3 {name}</h2></div>
    )
  }

