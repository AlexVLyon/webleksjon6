import React from 'react';
import './index.css'

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <TodoCardList 
        values = {
          [{id:1,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
          {id:2,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"},
          {id:3,title:"Todotitle",author:"Author Author",description:"I'm baby sriracha hot chicken mixtape pabst organic air"}]
        } 
      />

    </div>
  );
}

function Navbar(){
  return(
    <>  
      <h1 class="headerBar">HIOF</h1>

      <div id="userNameBar">
        <p class="headerBar">User user</p>
      </div>
    </>
  )
}

function TodoCardList( {values} ){
  return(
    <>
    <ul>
      {values.map(value => (
        <li key={values.id}>{value.title}</li>
      )
        )}
    </ul>
    </>
  );

}

export default App;
