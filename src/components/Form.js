import { useState } from "react";

function Form(props) {

    let [text, setText] = useState("")
    
    function handleChange(event) {
        let tx = event.target.value
        setText(tx)
    }

    function addItem(event) {
        event.preventDefault()
        
        if(text) {
            props.onAddItem(text)
            setText("")
        }
    }

    return(
        <form>
            <input onChange={handleChange} placeholder="+ Adicionar uma tarefa" type="text" value={text}></input>
            <button onClick={addItem}></button>
        </form>
    )
}

export default Form;