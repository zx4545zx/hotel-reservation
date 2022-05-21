const Modal = ({ modalEMR, setModalEMR }) => {
    return (
      <div id="modal-js-example" className={`modal ${modalEMR && "is-active"}`}>
        <div className="modal-background" onClick={() => setModalEMR(false)}></div>
  
        <div className="modal-content is-flex is-justify-content-center">
          <form className="box">
          <label>Equipments Meeting Rooms</label>
            <nav className="level">
              <label className="checkbox">
                <input type="checkbox"/>
                Wednesday
                </label>
                <input class="level-item" type="number"></input>
            </nav>
  
            <button type="submit" className="button is-success">
              Save
            </button>
          </form>
        </div>
  
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModalEMR(false)}
        ></button>
      </div>
    );
  };
  
  export default Modal;
  