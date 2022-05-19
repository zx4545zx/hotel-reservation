import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

const Modal = ({ modal, setModal, item }) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    if (item) {
      setValue("id", item.id);
      setValue("name", item.name);
      setValue("price", item.price);
      setValue("people", item.people);
      setValue("table", item.table);
    }
    return;
  }, [item]);

  const onSubmit = (data) => {
    console.log(data);
  if (data.id != "") {
    axios
      .patch("http://localhost:4000/meeting_rooms/" + data.id, data)
      .then((res) => setModal(false));

    return;
  }

  axios
    .post("http://localhost:4000/meeting_rooms", data)
    .then((res) => setModal(false));
};

  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModa(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} hidden />
          <label>Name</label>
          <input
            className="input box"
            type="text"
            placeholder="equipments name"
            {...register("name")}
          />
          <label>Price / THB</label>
          <input
            className="input box"
            type="number"
            placeholder="price / day"
            {...register("price")}
          />
          <label>People Number</label>
          <input
            className="input box"
            type="number"
            placeholder="number of people"
            {...register("people")}
          />
          <label>Tables Number</label>
          <input
            className="input box"
            type="number"
            placeholder="number of tables"
            {...register("table")}
          />

          <div className="file is-flex is-justify-content-center mb-5">
            <label className="file-label">
              <input className="file-input" type="file" name="image" />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Choose a file…</span>
              </span>
            </label>
          </div>

          <div className="is-flex is-justify-content-center ">
            <button type="submit" className="button is-success">
              Save
            </button>
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
