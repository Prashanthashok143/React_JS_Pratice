import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB';
export const ComponentAvalues=createContext(null);
export const ComponentA = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const EmailPassword ={email,setEmail,password,setPassword}
  return (
    <ComponentAvalues.Provider value={EmailPassword}>
     <h1>Email : {email}</h1>
     <h1>Password : {password}</h1>
     <ComponentB/>
    </ComponentAvalues.Provider>
  )
}
