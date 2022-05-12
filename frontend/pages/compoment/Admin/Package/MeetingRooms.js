const Modal = ({ modal, setModal }) => {
    return (
        <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
            <div className="modal-background" onClick={() => setModal(false)}></div>

            <div className="modal-content is-flex is-justify-content-center">
                <form className="box">
                    
                        <label>MeetingRooms</label>
                   

                    <nav className="level">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                            />
                            Wednesday
                        </label> 
                    </nav>
                    <nav className="level">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                            />
                            Wednesday
                        </label> 
                    </nav>

                    <nav className="level">
                        <button type="submit" className="button is-success ">
                            Save
                        </button>
                    </nav>
                </form>
            </div>

            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => setModal(false)}
            ></button>
        </div>
    );
};

export default Modal;
