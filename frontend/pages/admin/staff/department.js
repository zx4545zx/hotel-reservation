import AdminLayout from "../../compoment/Layout/AdminLayout";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useUser from "../../../libs/useUser";

const Department = () => {
  const [modal, setModal] = useState(false);
  const [departments, setDepartments] = useState([]);
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_cust) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments`)
      .then((res) => setDepartments(res.data));
  }, [departments]);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Department
      </div>

      <Modal modal={modal} setModal={setModal} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          onClick={() => setModal(true)}
        >
          Add New Staff
        </button>
      </div>

      <hr className="mb-3 mt-2" />

      <ListTable departments={departments} />
    </AdminLayout>
  );
};

export default Department;

const Modal = ({ modal, setModal, departmen }) => {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (departmen) {
      setValue("id", departmen.id);
      setValue("name", departmen.name);
    }
    return;
  }, []);

  const onSubmit = (data) => {
    if (data.id != "") {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments/${data.id}`,
          data
        )
        .then((res) => setModal(false));

      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments`, data)
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
            <label className="label">Departmen</label>
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

const ListTable = ({ departments }) => {
  const [modal, setModal] = useState(false);
  const [departmen, setDepartment] = useState([]);

  const OpenModal = (item) => {
    setModal(true);
    setDepartment(item);
  };

  const DelDepartment = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments/${id}`)
      .then((res) => console.log(res));
  };

  return (
    <>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th>Departmen</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((p) => {
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
                    onClick={() => DelDepartment(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modal && (
        <Modal modal={modal} setModal={setModal} departmen={departmen} />
      )}
    </>
  );
};
