import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout"

const CustomersList = () => {
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Customers
      </div>
      
      <Modal modal={modal} setModal={setModal} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          data-target="modal-js-example"
          onClick={() => setModal(true)}>
          ADD
        </button>
      </div>

      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th className="has-text-centered">Name</th>
            <th>Phone number</th>
            <th>E-mail</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Benjawan Suiwong</td>
            <td>0954137065</td>
            <td>Bensuiwong@hotmail.com</td>
            <td className="has-text-centered">
              <button className="button is-info mx-3">Edit</button>
              <button className="button is-danger mx-3">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <hr className="mt-0" />

    </AdminLayout>
  );
};

export default CustomersList;

const Modal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>
      <div className="modal-content is-flex is-justify-content-center">
        <form className="box">
          <label>Name</label>
          <input
            className="input box"
            type="text"
            placeholder="customer name"
          />
          <label>Phone Number</label>
          <input
            className="input box"
            type="number"
            placeholder="000-000-0000"
          />
          <label>E-mail</label>
          <input
            className="input box"
            type="email"
            placeholder="abcdef0@gmail.com"
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


