import { useForm } from "react-hook-form";

const Modal = ({ modalSMR, setModalSMR, services, setListPackageServices }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const result = [];
    if (data.services) {
      for (const d of data.services) {
        for (const r of services) {
          if (r.id == d.toString()) {
            result.push(r);
          }
        }
      }
    }

    setListPackageServices(result);
    setModalSMR(false);
  };
  return (
    <div id="modal-js-example" className={`modal ${modalSMR && "is-active"}`}>
      <div
        className="modal-background"
        onClick={() => setModalSMR(false)}
      ></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Service Meeting Rooms</label>

          {services.map((s) => {
            return (
              <tr key={s.id}>
                <nav className="level">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      {...register("services")}
                      value={s.id}
                    />
                    {s.name}
                  </label>
                  <input
                    class="level-item"
                    type="number"
                    onChange={(event) => (s.value = event.target.value)}
                  ></input>
                </nav>
              </tr>
            );
          })}
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

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModalSMR(false)}
      ></button>
    </div>
  );
};

export default Modal;
