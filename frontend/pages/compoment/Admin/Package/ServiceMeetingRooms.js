const Modal = ({ modalSMR, setModalSMR }) => {
  return (
    <div id="modal-js-example" className={`modal ${modalSMR && "is-active"}`}>
      <div
        className="modal-background"
        onClick={() => setModalSMR(false)}
      ></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box">
          <label>Service Meeting Rooms</label>
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
        onClick={() => setModalSMR(false)}
      ></button>
    </div>
  );
};

export default Modal;
