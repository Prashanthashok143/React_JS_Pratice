import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, deleteDetails, updateDetails } from "./TodoSlice";

const TodoApp = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const Data = useSelector((state) => state.Todo.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        className="m-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {userId ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(updateDetails({ id: userId, name }));
            setName("");
            setUserId("");
          }}
        >
          Update
        </button>
      ) : (
        <button
          className="btn btn-success"
          onClick={() => {
            dispatch(addDetails(name));
            setName("");
          }}
        >
          Add Todo
        </button>
      )}
      <table className="table table-dark table-hover text-center w-50 m-3">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          { Data.length>0 && Data.map(({ id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                {" "}
                <button
                  className="btn btn-warning m-2"
                  onClick={() => {
                    setUserId(id);
                    setName(name);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => {
                    dispatch(deleteDetails(id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoApp;
