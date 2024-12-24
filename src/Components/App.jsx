import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App(){

    // const [todoText , setTodoText] = useState("");
    const [items , setItems] = useState([]);

    

    function handleClick(newText){
      // setTodoText(newText);
      if(newText.trim() !== ""){
        setItems([...items , newText]);
      }
    }

    function deleteItem(id){
        setItems((previous) => {
          return previous.filter((item , index) => {
            return index !== id;
          })
        })
    }

    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea onAdd={handleClick} />
          <div>
            <ul>
              {items.map((ele , index) => {
                return <TodoItem key={index} id={index} element={ele} 
                onChecked={deleteItem} />
              })}
            </ul>
          </div>
        </div>
    );
}

export default App;
