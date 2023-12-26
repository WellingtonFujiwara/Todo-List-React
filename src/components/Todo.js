import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import Item from "../Item";

const SAVED_ITEMS = "savedItems";

function Todo() {
    
    const [items, setItems] = useState([])

    useEffect(() => {
      let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

      if (savedItems) {
        setItems(savedItems)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    
    function onAddItem(text) {
      let item = new Item(text)

      setItems([...items, item])
    }

    function onDeleteItem(item) {
      let filteredItems = items.filter(it=>it.id !== item.id)

      setItems(filteredItems)
    }

    function onDone(item) {
      let updatedItems = items.map(it => {
        if (it.id === item.id) {
          it.done = !it.done
        }
        return it
      })

      setItems(updatedItems)
    }

    return (
      <div>
        <h1 className="text-3xl font-bold underline">Todo List</h1>

        <Form onAddItem={onAddItem}></Form> 
        <List onDone={onDone} onDeleteItem={onDeleteItem}k items={items}></List>
        
      </div>
    );
  }
  
export default Todo;
  