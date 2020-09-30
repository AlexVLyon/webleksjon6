import React from "react";



const Modal = ({ addTodo, setFormData, formData }) => {
  
    const handleSubmit = (event) => {
    event.preventDefault();
    completeTodo(todo);
  };

  const showModal = () => {
    this.setState({ show: true });
  };

const hideModal = () => {
    this.setState({ show: false });
  };

  const updateValue = (event) => {
    setFormData({ title: event.target.value });
  };

  return (
      <>
        <div id="createTodoModal" className="modal">
            <div className="modal-content">
                <div id="modalHeader">
                    <span class="close">&times;</span>
                    <h2>Create todo</h2>
                </div>
                
                <div id="inputWrapper">
                    <label for="title">Title:</label>
                    <input class="inputFelt" type="text" id="title"/>
                
                    <label for="description">Description:</label>
                    <input class="inputFelt" type="text" id="description" maxlength="125"/>
                 
                    <label for="author">Author:</label>
                    <input class="inputFelt" type="text" id="author"/>
               
                    <button id="createButton" onClick={ () => createTodo(todo) }>Create</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Modal;