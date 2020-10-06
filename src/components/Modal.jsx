import React,{useState} from "react";

const Modal = ({ createTodo, setFormData, formData, showModal}) => {
  const [charCount, setcharCount] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo();
    showModal()
  };

  const updateDescription = (event) =>{
    setcharCount(event.target.value.length);
    updateValue(event);
  }

  const updateValue = (event) => {  
    const inputValue = { [event.target.name]: event.target.value };
      setFormData((prev) => ({
        ...prev,
        ...inputValue
      }));
  };



  return (
      <>
        <div id="createTodoModal" className="modal">
            <div className="modal-content">

                <div id="modalHeader">
                    <span className="close" onClick={() => showModal()}>&times;</span>
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
                        onChange={updateDescription}
                      />
                 
                      <label>Author:</label>
                      <input 
                        className="inputFelt" 
                        id="author"
                        value={formData.author}
                        name="author"
                        onChange={updateValue}
                      />
                      
                      {charCount < 50 ?
                       (<button id="createButton" type="submit">Create</button>) 
                       : (<p>Maks 50 chars i feltene!</p>)
                      };
                      
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Modal;