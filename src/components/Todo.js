import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import Item from "../Item";
import Modal from './Modal';

const SAVED_ITEMS = "savedItems";

function Todo() {
    
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

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
      onHideModal()
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

    function onHideModal() {
      setShowModal(false)
    }

    return (
      <div className="flex flex-col items-center">
        <header className="flex flex-row justify-between mt-6 mb-6 w-4/5">
          <h1 className="text-3xl font-bold underline">Todo List</h1>
          <button onClick={() => setShowModal(true)} className="rounded-full w-10 h-10 bg-gray-100 font-bold">+</button>
        </header>

        <List onDone={onDone} onDeleteItem={onDeleteItem}k items={items}></List>
        
        {/* <Form onAddItem={onAddItem}></Form> */} 
        <Modal show={showModal} onHideModal={onHideModal}><Form onAddItem={onAddItem}></Form></Modal>
      </div>
    );
  }
  
export default Todo;
  