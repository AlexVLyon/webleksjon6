import React from "react"

const CompletedListItem = ({todo}) => {
  return(
  <>
  <tr>
    <td>{todo.title}</td>
    <td>{todo.author}</td>
    <td>{todo.description}</td>
    <td>{todo.completedDate}</td>
  </tr>
  </>
  )
}

export default CompletedListItem;