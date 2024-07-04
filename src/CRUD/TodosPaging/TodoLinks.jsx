import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Todo2 from './Todo2';
import UpdateTodo2 from './UpdateTodo2';

const TodoLinks = () => {

    
  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Todo2/>}/>
    <Route path='/updateTodo2/:id' element={<UpdateTodo2/>}/>
    </Routes>
    </BrowserRouter></>
  )
}

export default TodoLinks