import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Pratices = () => {
   

    // const navigate=useNavigate();
    const[data,setData]=useState([]);
    const[movieValue,setMovieValue]=useState("");
    const[movieactor,setMovieActor]=useState("");
    const[upadteMovie,setUpadteMovie]=useState("");
    const[updateActor,setUpadteActor]=useState("");
     const[edit,setEdit]=useState(null);
  
    useEffect(()=>{
       
            axios.get("http://localhost:3001/todo").then((ans)=>setData(ans.data)).catch((error)=>console.log(error));
    
    })
    const handleEdit=(id)=>{
       

      axios.get(`http://localhost:3001/todo/${id}`).then((ans)=>

     {setUpadteMovie(ans.data.movie)
      setUpadteActor(ans.data.actor)}).catch((error)=>console.log(error));
           
setEdit(id);
      // setUpadteActor(movieactor)
    //   const editedMovie = prompt(`Edit the movie : ${movie}`);
    //   const  editActor=prompt(`Edit the actor : ${actor}`)
 //   axios.patch(`http://localhost:3001/todo/${id}`,{
    //     movie:editedMovie,
    //     actor:editActor
  // }).then((msg)=>console.log(msg)).catch((error)=>console.log(error));
    // navigate(`/pratice/${id}`,{state:{id,movie,actor}})
    }
    const UpdateValue=()=>{
      axios.put(`http://localhost:3001/todo/${edit}`,{
        id:edit,
        movie:upadteMovie,
        actor:updateActor,
      }).then((ans)=>{
        console.log(ans)
      }).catch((error)=>console.log(error));
      setEdit(null);
    


    }
    const AddData=()=>{   
      console.log(data);
      axios.post("http://localhost:3001/todo",{"movie":movieValue,"actor":movieactor
       
      }).then((ans)=>console.log(ans)).catch((error)=>console.log(error));
      setMovieActor("")
      setMovieValue("")
    }
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Movie</Form.Label>
        <Form.Control type="text" value={movieValue} onChange={(e)=>setMovieValue(e.target.value)} className="w-25"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Actor</Form.Label>
        <Form.Control type="text" value={movieactor} onChange={(e)=>setMovieActor(e.target.value)}  className="w-25"/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={AddData}>
        Submit
      </Button>
    <Table striped bordered hover style={{textAlign:'center'}}>
   <thead>
  <tr>
  <th>ID</th> 
    <th>Movie</th>
    <th>Hero</th>
    <th>Delete</th>
  </tr>
     </thead>  
    <tbody>
     {
        data.map(({id,movie,actor})=>(
         id === edit ? (<tr className='d-flex flex-direction-column justify-content-center'>
        
        <td>{id}</td>
         <td><Form.Control type="text" value={upadteMovie} onChange={(e)=>setUpadteMovie(e.target.value)} className="w-50"/>
      </td>
        <td> <Form.Control type="text" value={updateActor} onChange={(e)=>setUpadteActor(e.target.value)} className="w-50"/>
     </td>
  <td> <Button variant="primary" type="submit" onClick={UpdateValue}>
         Update
       </Button></td>     
  
         </tr>  ):(
          <tr key={id}>
            <td>{id}</td>
            <td>{movie}</td>
            <td>{actor}</td>
            <td>
            <button onClick={()=>handleEdit(id,movie,actor)}>Edit</button>
            <button>Delete</button>    
            </td>
         </tr> 
         ) 
        ))
     }   
    </tbody>
    </Table>  
    </div>
  )
}

export default Pratices