import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const SubmitData=()=>{
    localStorage.setItem("email",email)
    navigate("/")
    
  }
  return (
    <div>
       <Form>
      <Form.Group className="mb-3">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-25"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-25"/>
      </Form.Group>
      
      <Button variant="primary" onClick={SubmitData}>
        Submit
      </Button>
    </Form>  heelleo
    </div>
  )
  
}

export default Signup