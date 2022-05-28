import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

const Modal = ({ modal, setModal, item }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (item) {
      setValue("id", item.id);
      setValue("name", item.name);
      setValue("size", item.size);
    }
    return;
  }, [item]);

  const onSubmit = (data) => {
    console.log(data);

    if (data.id != "") {
      axios
        .patch("http://localhost:4000/bedtypes/" + data.id, data)
        .then((res) => setModal(false));

      return;
    }

    axios
      .post("http://localhost:4000/bedtypes", data)
      .then((res) => setModal(false));
  };

  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} hidden />
          <label>Name</label>
          <input className="input box" 
          type="text" 
          placeholder="bedtype name"
          {...register("name")} 
          />
          <label>Size / ft </label>
          <input
            className="input box"
            type="number"
            step="any"
            placeholder="Size /ft "
            {...register("size")} 
          />
          <div className="buttons is-flex is-justify-content-center		">
            <button className="button is-success ">Save</button>
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
