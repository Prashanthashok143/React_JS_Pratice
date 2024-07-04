import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Login from './Login';
import Users from './useParams/Users';
import NavBar from './NavBar';
import Details from './useParams/Details';
import NestedRoutes from './NestedRoutes';
import Nested1 from './Nested1';
import Nested2 from './Nested2';
import NoPageFound from './NoPageFound';

const Browser = () => {
  return (
    <div>
     <BrowserRouter>
     <NavBar/>
     <Routes>
       
 <Route  path="/" element={<Home/>} />                {/* Here instead of element we can use component={Home} */}
 <Route path="/login" element={<Login/>} />
 <Route path="/users" element={<Users/>}/>
 <Route path="/users/:id" element={<Details/>}/>
 <Route path='/nestedRoutes' element={<NestedRoutes/>}>
  <Route index element={<Nested2/>}/>
<Route path="nested1" element={<Nested1/>}/>
<Route path='nested2' element={<Nested2/>}/>
 </Route>
 <Route path="*" Component={NoPageFound}/>
     </Routes>
     </BrowserRouter>   
    </div>
  )
}

export default Browser