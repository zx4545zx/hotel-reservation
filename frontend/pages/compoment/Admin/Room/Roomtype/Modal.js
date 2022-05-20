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
          <div className="buttons is-flex is-justify-content-center		">
            <button className="button is-success ">Save</button>
            <button className="button is-warning">cancle</button>
          </div>
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
