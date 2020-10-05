import React from "react";

const Modal = ({ createTodo, setFormData, formData, setModal}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo();
    setModal()
  };

  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue
    }));
  };

  return (
      <>
      {console.log(formData)}
        <div id="createTodoModal" className="modal">
            <div className="modal-content">

                <div id="modalHeader">
                    <span className="close" onClick={() => setModal()}>&times;</span>
                    <h2>Create todo</h2>
                </div>
                
                <div id="inputWrapper">


               <form onSubmit={handleSubmit}>

                    <label>Title:</label>
                    <input
                      className="inputFelt"
                      value={formData.title}
                      name="title"
                      onChange={updateValue}
                      autoFocus
                    />

                
                    <label>Description:</label>
                    <input className="inputFelt" 
                    id="description" 
                    maxLength="125"
                    value={formData.description}
                    name="description"
                    onChange={updateValue}
                    />
                 
                    <label>Author:</label>
                    <input className="inputFelt" 
                    id="author"
                    value={formData.author}
                    name="author"
                    onChange={updateValue}
                    />
                    <button id="createButton" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Modal;