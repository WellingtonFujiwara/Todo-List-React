import ListItem from './ListItem';

function List(props) {

    return (
        <ul className="flex flex-col gap-3 w-4/5">
            {props.items.map(item => <ListItem item={item} onDone={props.onDone} onDeleteItem={props.onDeleteItem} key={item.id}></ListItem>)}
        </ul>
    )
}

export default List;