import React,{useState} from 'react';
import './index.css'
import TodoCard from "./components/TodoCard"
import TodoCardList from "./components/TodoCardList"
import Title from "./components/Title"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import CompletedList from "./components/CompletedList"

function App() {
  const [modal, showModal]  = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", author:"" });
  const [todos, setTodos] = useState([
    {id:1,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:2,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
    {id:3,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"}]
  );

  let idIncrement = 4;
  
  const [completedTodos] = useState ([{id:4,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:5,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:6,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"} ])

  const createTodo = () => {
    setTodos((prev) => [{ id: idIncrement, ...formData }, ...prev]);
    idIncrement++;
  };
  
  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !==id);
    setTodos(newList);
  }

  const completeTodo = (todo) => {
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
          showModal={showModal}
        />
      )}

     
      <Navbar/>
      <main>
      <button id="newTodo" onClick={() => showModal(!modal)}>+Todo </button>
      <TodoCardList todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo}>
        <TodoCard />
      </TodoCardList>

      <CompletedList todos = {completedTodos}/>

      
      </main>
    </div>
  );
}

export default App;
