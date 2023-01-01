import React from "react";
import TodoItem from "./TodoItem";
function Todo({ todolist ,setTodolist}) {
  return (
    <div>
      <ul>
        {todolist.map((value, index) => {
            return <TodoItem item={value} todolist={todolist} setTodolist={setTodolist} key={index}></TodoItem>
          
        })}
      </ul>
    </div>
  );
}

export default Todo;
