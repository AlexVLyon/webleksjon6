import React,{useState} from 'react';
import './index.css'
import TodoCard from "./components/TodoCard"
import TodoCardList from "./components/TodoCardList"
import Title from "./components/Title"
import Modal from "./components/Modal"

function App() {
  const [modal, setModal]  = useState(false);
  const [formData, setFormData]  = useState ({ title:"test" })
  const [todos, setTodos] = useState([
    {id:1,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:2,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:3,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"}]
  );
  
  const [completedTodos, setCompletedTodos] = useState ([{id:4,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:5,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:6,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"} ])

  const createTodo = (todo) => {
    todos.push(todo);
  }
  
  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !==id);
    setTodos(newList);
  }

  const completeTodo = (todo) => {
    //skriver thisTodo for leselighet, blir gal av ordet todo
    completedTodos.push(todo);
    deleteTodo(todo.id);
  }

  return (
    <div className="App">
    
      
      <Navbar/>
      <main>
      <button id="newTodo">+Todo </button>
      <TodoCardList todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo}>
        <TodoCard />
      </TodoCardList>

      <CompletedList todos = {completedTodos}/>

      <Modal />

      </main>
    </div>
  );
}

function Navbar(){
  return(
    <>  
    <header>
      <Title title ="HIOF"/>

      <div id="userNameBar">
          <p className="headerBar">User user</p>
        </div>
      </header>
    </>
  )
}

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
}

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


export default App;
