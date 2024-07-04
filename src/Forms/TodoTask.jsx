import React, { useState } from "react";

const TodoTask = () => {
  const [todo, setTodo] = useState([]);
  const [todoData, setTodoData] = useState("");
  const AddTodo=()=>{
    setTodo([...todo,todoData])
    setTodoData("")
    console.log(todo)

  }
  return (
    <div     style={{ position: "relative", top: "0px", left: "130px" }}>
      <input
        type="text"
        value={todoData}
        onChange={(e) => setTodoData(e.target.value)}
      />
      <button onClick={AddTodo}>AddTodo</button>
      {
        todo.map((todo)=>(
        <li key={todo}>{todo}</li>    
        ))
      }
    </div>
  );
};

export default TodoTask;
