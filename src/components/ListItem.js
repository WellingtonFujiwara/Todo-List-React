import Card from "./Card";

function DoneImg(props) {

    if(props.done) {
        return <img alt="done" src="./assets/check-done.png"></img>
    } else {
        return <img alt="undone" src="./assets/check-undone.png"></img>
    }
}

function ListItem(props) {

    return (
       
        <li className={props.item.done ? "line-through text-stone-400" : "text-white" }>

            <Card>
                <div className="flex items-center gap-2">
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>

                    {props.item.text}
                </div>
                

                <button onClick={()=>{props.onDeleteItem(props.item)}}><img alt="delete" src="./assets/trash-duotone.png"></img></button>
            </Card>

        </li>
       
    )
}

export default ListItem;