import React,{useState} from 'react';
import './index.css'
import TodoCard from "./components/TodoCard"
import TodoCardList from "./components/TodoCardList"
import Title from "./components/Title"
import Modal from "./components/Modal"

function App() {
  const [modal, setModal]  = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", author:"" });
  const [todos, setTodos] = useState([
    {id:1,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:2,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:3,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"}]
  );
  
  const [completedTodos] = useState ([{id:4,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:5,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:6,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"} ])

  const createTodo = () => {
    setTodos((prev) => [{ id: todos.length, ...formData }, ...prev]);
  };
  
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
      {modal && (
        <Modal
          createTodo={createTodo}
          setFormData={setFormData}
          formData={formData}
          setModal={setModal}
        />
      )}

     
      <Navbar/>
      <main>
      <button id="newTodo" onClick={() => setModal(!modal)}>+Todo </button>
      <TodoCardList todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo}>
        <TodoCard />
      </TodoCardList>

      <CompletedList todos = {completedTodos}/>


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
