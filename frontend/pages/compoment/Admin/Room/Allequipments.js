import { useForm } from 'react-hook-form'

const Modal = ({ modalequipments, setModalequipments, equipmentsrooms, setListequipments }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const result = [];
    for (const d of data.equipmentRoom) {
      for (const r of equipmentsrooms) {
        if (r.id == d.toString()) {
          result.push(r);
        }
      }
    }
    setListequipments(result);
    setModalequipments(false);
  }

  return (
    <div id="modal-js-example" className={`modal ${modalequipments && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalequipments(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Equipments Rooms</label>
          {equipmentsrooms.map((s) => {
            return (
              <div key={s.id}>
                <nav className="level">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      {...register("equipmentRoom")}
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
        onClick={() => setModalequipments(false)}
      ></button>
    </div>
  );
};

export default Modal;
