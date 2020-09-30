import React from "react";

function TodoCard({ todo, deleteTodo, completeTodo }){
    return(
      <>
      <li className="todo" key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.author}</p>
        <p>{todo.description}</p>
        <button className="deleteButton" onClick={ () => deleteTodo(todo.id)}>Delete</button>
        <button className="completeButton" onClick={ () => completeTodo(todo) }>  Complete </button>
      </li>
     </>
    )
  }

  export default TodoCard