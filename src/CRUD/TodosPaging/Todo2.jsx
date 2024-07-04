import axios from 'axios';
import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import { useNavigate } from 'react-router-dom';

const Todo2 = () => {
    const [jsonData, setJsonData] = useState([]);
    const [movieDetails, setMovieDetails] = useState({
      movie: "",
      actor: "",
    });
    const hanldeMovieDetails = (e) => {
        const { name, value } = e.target;
        setMovieDetails({ ...movieDetails, [name]: value });
      };
      
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/todo/${id}`)
      .then((res) =>{
        console.log(res)
        BackendData();
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const BackendData = () => {
    axios
      .get("http://localhost:3001/todo")
      .then((res) => setJsonData(res.data))
      .catch((error) => console.log(error));
  };
  const handleAdd=()=>{
    const {movie,actor}=movieDetails;
    const postData={movie,actor}
    axios.post(`http://localhost:3001/todo`,postData).then(res=>{
        console.log(res);
        BackendData();
    }).catch(error=>console.log(error))
  }
  const navigate=useNavigate();

  const handleEdit=(id,movie,actor)=>{

   navigate(`/updateTodo2/${id}`,{state:{id,movie,actor}})
  }
   useEffect(() => {
    BackendData();
  }, []);
  
  return (
    
<div>
      <form className="m-3">
        <input
          type="text"
          name="movie"
          id="movie"
          className="m-2"
          value={movieDetails.movie}
          onChange={hanldeMovieDetails}
        />
        <input
          type="text"
          name="actor"
          id="actor"
          className="m-2"
          value={movieDetails.actor}
          onChange={hanldeMovieDetails}
        />

       <Button variant='dark' className='m-2' onClick={handleAdd}>Add</Button>
      </form>
      <Table className="text-center w-75 m-2" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie</th>
            <th>Actor</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {jsonData?.map(({ id, movie, actor }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{movie}</td>
              <td>{actor}</td>
              <td>
                <Button variant="primary" onClick={()=>handleEdit(id,movie,actor)}>Edit</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Todo2