import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todoinp, setTodoinp] = useState([]);

  const ValueChange = (event) => {
    setTodo(event.target.value);
  };
  const GetData = () => {
    if (todo.length !== 0) {
      const newInfo = { text: todo };
      setTodoinp([...todoinp, newInfo]);
      //In this code snippet, todo seems to be an array, 
      //and setTodo is a function used to update the state of todo in a React component.
      // Destructuring todo allows us to spread its existing elements along with todoData into a new array 
      //when adding a new todo item. If you add todoData directly without destructuring, 
      //it would replace the existing todo array entirely, which may not be the desired behavior.

      setTodo("");
    } else {
      alert("Please Enter Something");
    }
  };
  const DeleteItem = (index) => {
    const updatedTodos = [...todoinp];
    updatedTodos.splice(index, 1);
    setTodoinp(updatedTodos);
  };
  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");

    const update = [...todoinp];
    update[index].text = editedTodo;
    setTodoinp(update);
  };

  return (
    <div
      className="border d-flex w-75 m-auto p-3 mt-5"
      style={{ backgroundColor: "gray", color: "white" }}
    >
      <div>
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={ValueChange}
        />
        <button type="button" className="btn btn-primary" onClick={GetData}>
          AddTodo
        </button>
      </div>
      <ol>
        {todoinp.map((todo, index) => (
          <li
            className="d-flex flex-row mb-3  justify-content-evenly w-25"
            key={todo.index}
          >
            {todo.text}

            <button onClick={() => DeleteItem(index)}>❌</button>

            <button onClick={() => editItem(index)}>✔</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;
