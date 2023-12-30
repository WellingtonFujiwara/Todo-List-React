import Card from "./Card";

function Modal(props) {
    return (
        <div className="flex justify-center items-center w-screen h-screen fixed bg-black bg-opacity-50 hidden">
            <div className="bg-white p-3">
                <Card>
                    {props.children}
                </Card>
            </div>
        </div>
    )
}

export default Modal;