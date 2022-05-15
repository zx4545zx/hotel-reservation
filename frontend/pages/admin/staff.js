import { useState } from "react";
import AdminLayout from "../compoment/Layout/AdminLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Staff = () => {
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Staff
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

      <ListTable />
    </AdminLayout>
  );
};

export default Staff;

const Modal = ({ modal, setModal }) => {
  return (
    <div className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box">
          <label class="label">Department</label>
          <div class="select mb-2 is-fullwidth">
            <select>
              <option>Select department</option>
              <option>With options</option>
            </select>
          </div>

          <label class="label">Position</label>
          <div class="select mb-2 is-fullwidth">
            <select>
              <option>Select position</option>
              <option>With options</option>
            </select>
          </div>

          <div className="is-flex is-justify-content-center ">
            <div class="field mr-1">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field ml-1">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-center ">
            <div class="field mr-1">
              <label class="label">Phone Number</label>
              <div class="control">
                <input class="input" type="tel" />
              </div>
            </div>
            <div class="field ml-1">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" />
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-center ">
            <div class="field mr-1">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="tel" />
              </div>
            </div>
            <div class="field ml-1">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input class="input" type="email" />
              </div>
            </div>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <button class="button is-danger" onClick={() => setModal(false)}>
                Cancel
              </button>
            </p>
            <p class="control">
              <button class="button is-success">Save</button>
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

const ListTable = () => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Department</th>
          <th>Position</th>
          <th className="has-text-centered">Status</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Miracle</td>
          <td>Sword</td>
          <td>mmm@example.com</td>
          <td>0912337555</td>
          <td>การขาย</td>
          <td>หัวหน้าแผนก</td>
          <td className="has-text-centered">
            <FontAwesomeIcon
              icon={faCat}
              className="has-text-primary is-size-3"
            />
          </td>
          <td>
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-info mx-3">Edit</button>
              <button className="button is-danger mx-3">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Yugi</td>
          <td>Katsuya</td>
          <td>DDD@example.com</td>
          <td>0946689123</td>
          <td>การขาย</td>
          <td>พนักงานทั่วไป</td>
          <td className="has-text-centered">
            <FontAwesomeIcon
              icon={faCat}
              className="has-text-danger is-size-3"
            />
          </td>
          <td>
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-info mx-3">Edit</button>
              <button className="button is-danger mx-3">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
