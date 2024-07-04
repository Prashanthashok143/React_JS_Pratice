import React, { createContext, useState } from 'react'
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Layout from './React_Challenges/Pages/Layout';
import Home from './React_Challenges/Pages/Home';
import Blogs from './React_Challenges/Pages/Blogs';
import Contact, { Names, Values } from './React_Challenges/Pages/Contact';
import  NoPage from './React_Challenges/Pages/NoPage';
import Signup from './React_Challenges/Pages/Signup';
import Api from './React_Challenges/API';
import Pratices from './React_Challenges/Pratices';
import Update from './React_Challenges/UpdatePratice';
// import Movie from './Project/Movie';

export const createProvider=createContext(null);
const App = () => {
const LoggedIn=localStorage.getItem("email")!==null;
  const [isLogin,setIsLogin]=useState(LoggedIn ?? false)
  const Login={isLogin,setIsLogin}
 
  return (
    <div>
  
<createProvider.Provider value={Login}> 
<BrowserRouter>
  <Layout/>

<Routes>
 
<Route path='/' element={<Home/>}/>



<Route path='signup' element={<Signup/>}/>


  
 {
  isLogin && ( <>
  {/* <Route path="blogs:id/:name" element={<Blogs/>}/> */}
  <Route path="/contact" element={<Contact/>}>
  <Route path='names' element={<Names/>}/>
  <Route path="values" element={<Values/>}/>
  </Route>
  <Route path='/api' element={<Api/>}/>
  <Route path='/pratice' element={<Pratices/>}/>
  <Route path="pratice/:id" element={<Update/>}/>
   </>)
 }


<Route path="*" element={<NoPage/>}/>
</Routes> 
  </BrowserRouter>
</createProvider.Provider>


    </div>
  )
}

export default App