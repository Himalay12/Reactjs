import React, { useState } from "react";
import ToDoitem from './ToDoitem';
import InputArea from './InputArea';

function App() {
  
  const [Items, setItem] = useState([]); 

  function handleClick(inputText){
    const value = inputText;
    setItem(prevValue => [...prevValue, value]);
  }

  function ToDelete(id){
    setItem(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea addItem={handleClick} />
        <div>
          <ul>
            {Items.map((item, index) => (
              <ToDoitem 
                key={index}
                id={index}
                item={item} 
                ToDelete={ToDelete} 
              />))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
