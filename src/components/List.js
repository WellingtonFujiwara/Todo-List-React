import ListItem from './ListItem';

function List(props) {

    return (
        <ul>
            {props.items.map(item => <ListItem item={item} onDone={props.onDone} onDeleteItem={props.onDeleteItem} key={item.id}></ListItem>)}
        </ul>
    )
}

export default List;