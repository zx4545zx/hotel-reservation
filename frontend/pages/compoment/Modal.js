const Modal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal}`}>
      <div className="modal-background" onClick={() => setModal("")}></div>

      <div className="modal-content">
        <form class="box">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alex@example.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="********" />
            </div>
          </div>

          <button class="button is-primary">Sign in</button>
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
