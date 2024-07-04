import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TODO from './TODO';
import  About from "./About"
import Contact from "./Contact";
import Layout from './Layout';
import Nopage from "./Nopage";
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
export const PagesValues=createContext(null)

const Render = () => {
    const LoggIn=localStorage.getItem("username")!==null;
    const [auth,setAuth]=useState(LoggIn ?? false);
    const valuesPassing={auth,setAuth}
    console.log(valuesPassing)
  return (
    <div>
    <PagesValues.Provider value={valuesPassing}>
    
   <BrowserRouter>
   <Layout/>
 <Routes>
 <Route path="/" element={<Home />} />
{
    auth && (
        <>
          <Route path="/todo" element={<TODO />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        </>
    )
}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Nopage />} /> 
   </Routes>
   </BrowserRouter>    
    </PagesValues.Provider>    
    </div>
  )
}

export default Render;