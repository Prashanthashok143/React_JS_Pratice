import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";

const Todo3 = () => {
  const [movie, setMovie] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [tempId, setTempId] = useState(null);
  const [updateMovie, setUpdateMovie] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [isupdate, setIsupdate] = useState(false);
  console.log(updateMovie);
  const getTodoData = () => {
    axios
      .get("http://localhost:3001/todo")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const addTodo = () => {
    axios
      .post("http://localhost:3001/todo", {
        movie: movie,
        actor: status,
      })
      .then((res) => {
        console.log(res);
        getTodoData();
      })
      .catch((error) => console.log(error));
  };
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todo/${id}`)
      .then((res) => {
        console.log(res);
        getTodoData();
      })
      .catch((error) => console.log(error));
  };
  const editTodo = (id, movie, actor) => {
    setTempId(id);
    setIsupdate(true);
    setUpdateMovie(movie);
    setUpdateStatus(actor);
  };

  const updateTodo = () => {
    const putUpdate={movie:updateMovie,actor:updateStatus}
    console.log(putUpdate)
    axios
      .put(`http://localhost:3001/todo/${tempId}`,putUpdate)
      .then((res) => {
      setIsupdate(false)
       setTempId(null)
       getTodoData()
       console.log(res)
      })
      .catch((error) => console.log(error));
  };
  const cancelUpadte=()=>{
    setIsupdate(false)
    setTempId(null)
  }
  useEffect(() => {
    getTodoData();
  }, []);
  return (
    <div>
      <hr/>
      <input
        className="m-3 form-control w-25"
        type="text"
        name="movie"
        id="movie"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
      <input
        className="m-3 form-control w-25"
        type="text"
        name="status"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="btn btn-dark m-3 w-25" onClick={addTodo}>
        Add
      </button>
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
          {data?.map(({ id, movie, actor }) => (
            <tr key={id}>
              <td>{id}</td>
              {tempId === id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={updateMovie}
                      onChange={(e) => setUpdateMovie(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={updateStatus}
                      onChange={(e) => setUpdateStatus(e.target.value)}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>{movie}</td>
                  <td>{actor}</td>
                </>
              )}
              {isupdate ? (
                <>
                  <td>
                    <Button variant="success" onClick={updateTodo}>
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button variant="warning" onClick={cancelUpadte}>Cancel</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => editTodo(id, movie, actor)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => deleteTodo(id)}>
                      Delete
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo3;
