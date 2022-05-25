import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const CustomersList = () => {
  const [modal, setModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/customers")
      .then((res) => setCustomers(res.data));
  }, []);

  const DelCus = (data) => {
    axios
      .delete("http://localhost:4000/customers/" + data.id)
      .then((res) => window.location.reload());
  };

  const EditCus = (data) => {
    setEdit(data);
    setModal(true);
  };

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Customers
      </div>

      <Modal modal={modal} setModal={setModal} edit={edit} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          data-target="modal-js-example"
          onClick={() => setModal(true)}
        >
          ADD
        </button>
      </div>

      <hr className="my-3" />

      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone number</th>
            <th>E-mail</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => {
            return (
              <tr key={c.id}>
                <th>{c.id}</th>
                <td>{c.first_name}</td>
                <td>{c.last_name}</td>
                <td>{c.phone_number}</td>
                <td>{c.email}</td>
                <td className="has-text-centered">
                  <button
                    className="button is-info mx-3"
                    onClick={() => EditCus(c)}
                  >
                    Edit
                  </button>
                  <button
                    className="button is-danger mx-3"
                    onClick={() => DelCus(c)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default CustomersList;

const Modal = ({ modal, setModal, edit }) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    if (edit.length != 0) {
      setValue("first_name", edit.first_name);
      setValue("last_name", edit.last_name);
      setValue("email", edit.email);
      setValue("phone_number", edit.phone_number);
      setValue("password", edit.password);
    }
  }, [edit]);

  const onSubmit = (data) => {
    if (edit.id) {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/customers/${edit.id}`,
          data
        )
        .then((res) => {
          setModal(false);
          window.location.reload();
        });
      return;
    }

    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/customers`, data)
      .then((res) => {
        setModal(false);
        window.location.reload();
      });
    return;
  };

  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>
      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input
            className="input box"
            type="text"
            placeholder="first name"
            {...register("first_name")}
          />
          <label>Last Name</label>
          <input
            className="input box"
            type="text"
            placeholder="last name"
            {...register("last_name")}
          />
          <label>Phone Number</label>
          <input
            className="input box"
            type="tel"
            placeholder="000-000-0000"
            {...register("phone_number")}
          />
          <label>E-mail</label>
          <input
            className="input box"
            type="email"
            placeholder="customer@example.com"
            {...register("email")}
          />
          <label>Password</label>
          <input
            className="input box"
            type="password"
            placeholder="******"
            {...register("password")}
          />
          <label>Confirm Password</label>
          <input
            className="input box"
            type="password"
            placeholder="******"
            {...register("confirm_password", {
              validate: (value) => value === watch("password"),
            })}
          />

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
