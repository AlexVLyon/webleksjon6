import React from "react";
import Title from "./Title"

function TodoCard({ todo, deleteTodo, completeTodo }){
    return(
      <>
      <li className="todo" key={todo.id}>
        <Title title={todo.title} />
        <p>{todo.author}</p>
        <p>{todo.description}</p>
        <button className="deleteButton" onClick={ () => deleteTodo(todo.id)}>Delete</button>
        <button className="completeButton" onClick={ () => completeTodo(todo) }>  Complete </button>
      </li>
     </>
    )
  }

  export default TodoCard