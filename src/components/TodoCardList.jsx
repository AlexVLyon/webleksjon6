import React from "react";
import TodoCard from "./TodoCard"
function TodoCardList( {todos,deleteTodo,completeTodo} ){
  return(
    <>
    <ul  id="todoList">
      {todos.map((todo) =>(
        <TodoCard todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={todo.id}/>
      ))}
      </ul>
    </>
  );
}


  export default TodoCardList