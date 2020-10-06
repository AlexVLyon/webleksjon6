import React,{useState} from 'react';
import './index.css'
import TodoCardList from "./components/TodoCardList"
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

  
  const [completedTodos] = useState ([{id:4,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:5,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"},
  {id:6,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air", completedDate:"22.12.20"} ])

  const [count, setCount] = useState(7);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const createTodo = () => {
    setTodos((prev) => [{ id: count, ...formData }, ...prev]);
    increment();
  };

  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !==id);
    setTodos(newList);
  }

  const completeTodo = (todo) => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let dato = day + "." + month + "." + year;

    let completingTodo  = {...todo, completedDate:dato}
    completedTodos.push(completingTodo);
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

      {todos.length === 0 && ( <h2>Jippi! Ingen todos i dag! :D</h2>)}

      <TodoCardList todos = {todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />

      <h2 id="completedTodosHeading">Completed todos</h2>
            <div id="checkboxContainer">
                <input type="checkbox" name="filterByDate" id="filterByDateCheckbox" />
                <label htmlFor="filterByDate">Filter by date</label>
            </div>

      <CompletedList todos = {completedTodos}/>

      
      </main>
    </div>
  );
}

export default App;
