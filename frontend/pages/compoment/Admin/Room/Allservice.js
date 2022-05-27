import { useForm } from 'react-hook-form'

const Modal = ({ modalservice, setModalservice, serviceroom, setListservice }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const result = [];
    for (const d of data.serviceRoom) {
      for (const r of serviceroom) {
        if (r.id == d.toString()) {
          result.push(r);
        }
      }
    }
    setListservice(result);
    setModalservice(false);
  }

  return (
    <div id="modal-js-example" className={`modal ${modalservice && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalservice(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Service Rooms</label>
          {serviceroom.map((s) => {
            return (
              <div key={s.id}>
                <nav className="level">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      {...register("serviceRoom")}
                      value={s.id}
                    />
                    {s.name}
                  </label>
                </nav>
              </div>
            )
          })}

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
        onClick={() => setModalservice(false)}
      ></button>
    </div>
  );
};

export default Modal;
