const Modal = ({ modalR, setModalR }) => {
  return (
    <div id="modal-js-example" className={`modal ${modalR && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalR(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box">
          <label>Rooms</label>
          <nav className="level">
            <label className="checkbox">
              <input type="checkbox" />
              Wednesday
            </label>
            <input className="level-item" type="number"></input>
          </nav>
          <button type="submit" className="button is-success">
            Save
          </button>
        </form>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModalR(false)}
      ></button>
    </div>
  );
};

export default Modal;
