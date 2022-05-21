import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import Router from "next/router";

const Modal = ({ modal, setModal, item }) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    if (item) {
      setValue("id", item.id);
      setValue("name", item.name);
    }
    return;
  }, [item]);

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);

    if (data.id != "") {
      axios
        .patch("http://localhost:4000/servicerooms/" + data.id, data)
        .then((res) => setModal(false));

      return;
    }

    axios
      .post("http://localhost:4000/servicerooms", data)
      .then((res) => setModal(false));
  };

  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("id")} hidden />
          <label>Name</label>

          <input
            className="input box"
            type="text"
            placeholder="service name"
            {...register("name")}
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
