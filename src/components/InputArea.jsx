import React, {useState}from "react";

function InputArea(props) {
  
  const [inputText, setInput] = useState("");
  
  function handleChange(event){
    setInput(event.target.value);
  }
  
  return (
    <div className="form">
      <input 
        onChange={handleChange} 
        type='text' 
        value={inputText}   
      />
      <button onClick={() => {
        props.addItem(inputText);
        setInput("");
        }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
