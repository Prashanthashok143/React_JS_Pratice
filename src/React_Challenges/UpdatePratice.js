import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdatePratice = () => {
    const location=useLocation();
    const navigate=useNavigate();
  const {id,movie,actor}=location.state;
  const [cinema,SetCinema] =useState(movie)
  const [actors,setActor]=useState(actor)
  const SubmitData=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3001/todo/${id}`,{
        movie:cinema,
        actor:actors,

    }).then((msg)=>console.log(msg)).catch((error)=>console.log(error));
    navigate("/pratice")
  }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Movie</Form.Label>
        <Form.Control type="text" value={cinema} onChange={(e)=>SetCinema(e.target.value)}  className="w-25"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Actor</Form.Label>
        <Form.Control type="text" value={actors} onChange={(e)=>setActor(e.target.value)}  className="w-25"/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={SubmitData}>
        Submit
      </Button>
    </Form> 
    </div>
  );
}

export default UpdatePratice