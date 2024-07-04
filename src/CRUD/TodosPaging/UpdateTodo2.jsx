import axios from 'axios';
import React, {  useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateTodo2 = () => {
  const location=useLocation();
  const {id,movie,actor} =location?.state;
  const [movieUpdate,setMovieUpdate]=useState(movie);
  const [actorUpdate,setactorUpdate]=useState(actor);
const navigate=useNavigate();
const handleUpdateTodo=()=>{
axios.put(`http://localhost:3001/todo/${id}`,{id,
    movie:movieUpdate,actor:actorUpdate
  }).then(res=>{
        console.log(res);
        navigate("/")
       
    }).catch(error=>console.log(error))

    navigate("/")
 
}

  
  

  return (
    <div>
      <input type="text" name="movie" id="movie" value={movieUpdate} onChange={(e)=>setMovieUpdate(e.target.value)}  />
      <input type="text" name="actor" id="actor" value={actorUpdate} onChange={(e)=>setactorUpdate(e.target.value)} />
      <Button variant='success' onClick={handleUpdateTodo}>UpdateTodo</Button>
    </div>
  )
}

export default UpdateTodo2