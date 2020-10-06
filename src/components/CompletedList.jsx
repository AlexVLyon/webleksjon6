import React from "react"
import CompletedListItem from "./CompletedListItem"

const CompletedList = ({todos}) =>{
    return(
      <>
      <table  id="completedTodos">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        {todos.map((todo) =>(
          
          <CompletedListItem todo={todo}  key={todo.id}/>
          
        ))}
        </table>
      </>
    )
  };

export default CompletedList;