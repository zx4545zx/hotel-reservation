const Modal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box">
          <label>Name</label>
          <input
            className="input box"
            type="text"
            placeholder="equipments name"
          />
          <label>Price / THB</label>
          <input
            className="input box"
            type="number"
            placeholder="price / day"
          />
          <label>People Number</label>
          <input
            className="input box"
            type="number"
            placeholder="number of people"
          />
          <label>Tables Number</label>
          <input
            className="input box"
            type="number"
            placeholder="number of tables"
          />

          <button type="submit" className="button is-success">
            Save
          </button>
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
