import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Todo1 = () => {
  const [jsonData, setJsonData] = useState([]);
  const [movieDetails, setMovieDetails] = useState({
    movie: "",
    actor: "",
  });
  const [isUpdate,setIsUpdate]=useState(false);
  const [updateId,setUpdateId]=useState(-1)
  const hanldeMovieDetails = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };
  const BackendData = () => {
    axios
      .get("http://localhost:3001/todo")
      .then((res) => setJsonData(res.data))
      .catch((error) => console.log(error));
  };
  const handleAdd = () => {
    const { movie, actor } = movieDetails;
    if (movie && actor) {
      const postData = { movie, actor };
      axios
        .post("http://localhost:3001/todo", postData)
        .then((res) => {
          console.log(res);
          BackendData();
          setMovieDetails({
            movie:"",
            actor:""
          })
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please fill out");
    }
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

  const handleEdit=(id,movie,actor)=>{
    setIsUpdate(true);
    setUpdateId(id)
    setMovieDetails({
        movie:movie,
        actor:actor
    })

  }
  const handleUpdate=()=>{
    const { movie, actor } = movieDetails;
    if (movie && actor) {
        const postData = { movie, actor };
        axios
          .put(`http://localhost:3001/todo/${updateId}`, postData)
          .then((res) => {
            console.log(res);
            BackendData();
            setUpdateId(-1)
            setIsUpdate(false)
            setMovieDetails({
              movie:"",
              actor:""
            })
          })
          .catch((error) => console.log(error));
      } else {
        alert("Please fill out");
   
      }

  }
  const handleCancel=()=>{
    setIsUpdate(false)
    setMovieDetails({
        movie:"",
        actor:""
      })
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
{
    isUpdate?(<>
         <Button className="m-2" variant="success" onClick={handleUpdate}>
    Update
  </Button>
  <Button className="m-2" variant="warning" onClick={handleCancel}>
   Cancel
  </Button>
    </>):( <Button variant="dark" onClick={handleAdd}>
    Add
  </Button>)
}
       
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
      <hr/>
    </div>
  );
};

export default Todo1;
