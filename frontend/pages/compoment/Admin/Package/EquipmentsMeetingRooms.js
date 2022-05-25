import { useForm } from 'react-hook-form';

const Modal = ({ modalEMR, setModalEMR, equipment, setListPackageEquipment}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const result = [];
    if (data.equipment) {
    for (const d of data.equipment) {
      for (const r of equipment) {
        if (r.id == d.toString()) {
          result.push(r);
        }
      }
    }
  }
    setListPackageEquipment(result);
    setModalEMR(false)
  }

    return (
      <div id="modal-js-example" className={`modal ${modalEMR && "is-active"}`}>
        <div className="modal-background" onClick={() => setModalEMR(false)}></div>
  
        <div className="modal-content is-flex is-justify-content-center">
          <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Equipments Meeting Rooms</label>

          {equipment.map((s) => {
            return (
            <tr key={s.id}>
              <nav className="level">
              <label className="checkbox">
                <input 
                type="checkbox"
                {...register("equipment")}
                value={s.id}
                />
                {s.name}
                </label>
                <input class="level-item" type="number" onChange={event => s.value = event.target.value}></input>
            </nav>
            </tr>
            )})}


            
  
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
  