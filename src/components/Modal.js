function Modal(props) {

    

    function hideModal(e) {
        let target = e.target
        if(target.id === 'modal') {
            props.onHideModal()
        }
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "flex justify-center items-center w-screen h-screen fixed bg-black bg-opacity-50" : "flex justify-center items-center w-screen h-screen fixed bg-black bg-opacity-50 hidden"}>
            <div className="bg-white p-3">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;