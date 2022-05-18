import AdminLayout from "../../compoment/Layout/AdminLayout";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Position = () => {
  const [modal, setModal] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions`)
      .then((res) => setPositions(res.data));
  }, [positions]);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Position
      </div>

      <Modal modal={modal} setModal={setModal} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          onClick={() => setModal(true)}
        >
          Add
        </button>
      </div>

      <hr className="mb-3 mt-2" />

      <ListTable positions={positions} />
    </AdminLayout>
  );
};

export default Position;

const Modal = ({ modal, setModal, position }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (position) {
      setValue("id", position.id);
      setValue("name", position.name);
    }
    return;
  }, []);

  const onSubmit = (data) => {
    if (data.id != "") {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions/${data.id}`,
          data
        )
        .then((res) => setModal(false));

      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions`, data)
      .then((res) => setModal(false));

    return;
  };

  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <input type="number" {...register("id")} hidden />

          <div className="field mr-1">
            <label className="label">Position</label>
            <div className="control">
              <input
                className="input"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <p className="control">
              <button className="button is-success" type="submit">
                Save
              </button>
            </p>
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

const ListTable = ({ positions }) => {
  const [modal, setModal] = useState(false);
  const [position, setPosition] = useState([]);

  const OpenModal = (item) => {
    setModal(true);
    setPosition(item);
  };

  const DelPosition = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions/${id}`)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th>Position</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((p) => {
            return (
              <tr key={p.id}>
                <th>{p.id}</th>
                <td>{p.name}</td>
                <td className="has-text-centered">
                  <button
                    className="button is-info mx-3"
                    onClick={() => OpenModal(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="button is-danger mx-3"
                    onClick={() => DelPosition(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modal && <Modal modal={modal} setModal={setModal} position={position} />}
    </>
  );
};
