import AdminLayout from "../../compoment/Layout/AdminLayout";
import { useState, useEffect } from "react";

const Position = () => {
  const [modal, setModal] = useState(false);

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

      <ListTable />
    </AdminLayout>
  );
};

export default Position;

const Modal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content box">
        <div class="field">
          <label class="label">Select Department</label>
          <div class="control">
            <div className="select mb-2 is-fullwidth">
              <select>
                <option>Select department</option>
                <option>Select department</option>
                <option>Select department</option>
                <option>Select department</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Position Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Position name" />
          </div>
        </div>

        <div class="buttons">
          <button class="button is-danger">Cancel</button>
          <button class="button is-success">Save</button>
        </div>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal(false)}
      ></button>
    </div>
  );
};

const ListTable = () => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>Position</th>
          <th>Department</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>พนักงานทั่วไป</td>
          <td>ต้อนรับ</td>
          <td className="has-text-centered">
            <button className="button is-info mx-3">Edit</button>
            <button className="button is-danger mx-3">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
