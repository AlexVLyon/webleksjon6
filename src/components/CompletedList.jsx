import React from "react"
import CompletedListItem from "./CompletedListItem"

const CompletedList = ({todos}) =>{
    return(
      <>
      <table  id="completedTodos">
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo) =>(
          
          <CompletedListItem todo={todo}  key={todo.id}/>
          
        ))}
        </tbody>
        </table>
      </>
    )
  };

export default CompletedList;