import { useState } from "react";
import List from "./List";
import Form from "./Form";

function Todo() {
    
    let [items, setItems] = useState([])
    
    function onAddItem(item) {
      setItems([...items, item])
    }

    return (
      <div>
        <h1 className="text-3xl font-bold underline">Todo List</h1>

        <Form onAddItem={onAddItem}></Form> 
        <List items={items}></List>
        
      </div>
    );
  }
  
  export default Todo;
  