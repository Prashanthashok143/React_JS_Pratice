import React, { createContext, useState } from 'react'
import Example from './Example';


export const UserContext=createContext()
const Home = () => {

  const[user,setUser]=useState("Prashanth")
  const Valuesss={user,setUser}

  return(
  
       
        <UserContext.Provider value={Valuesss}>
        <div>
        Home {user}

        <Example/>
        </div>
        </UserContext.Provider>


  )
}

export default Home