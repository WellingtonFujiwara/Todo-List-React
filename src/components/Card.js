function Card(props) {
    return (
        <div className="flex justify-between items-center rounded p-3 bg-stone-600">
            {props.children}
        </div>
    )
}

export default Card;