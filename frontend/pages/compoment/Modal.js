const Modal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal}`}>
      <div className="modal-background" onClick={() => setModal("")}></div>

      <div className="modal-content">
        <form className="box">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alex@example.com"
                autocomplete="off"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="********"
                autocomplete="off"
              />
            </div>
          </div>

          <div className="is-flex is-justify-content-space-between is-align-items-center">
            <a className=" has-text-link">Forgot password?</a>
            <div classNameName="is-flex is-align-items-center">
              <a className=" has-text-link px-5">Sign up</a>
              <button className="button is-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal("")}
      ></button>
    </div>
  );
};

export default Modal;
