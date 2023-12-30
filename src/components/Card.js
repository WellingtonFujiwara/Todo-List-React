function Card(props) {
    return (
        <div className="flex justify-between items-center">
            {props.children}
        </div>
    )
}

export default Card;