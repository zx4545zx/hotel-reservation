import { useState } from "react";
import Modalforequipments from "../../compoment/Admin/room/Allequipments";
import Modalforservice from "../../compoment/Admin/room/Allservice";
import Modal from "../../compoment/Admin/Room/index/Modal";
import ListTable from "../../compoment/Admin/Room/index/ListTable";

import AdminLayout from "../../compoment/Layout/AdminLayout";

const Rooms = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Rooms
      </div>
      <p class="subtitle is-5">Name Room</p>
      <input class="input" type="text" placeholder="Name Room"></input>
      <p class="subtitle is-5">Building</p>
      <input class="input" type="text" placeholder="A"></input>
      <p class="subtitle is-5">Guest/Room</p>
      <input class="input" type="text" placeholder="2"></input>
      <p class="subtitle is-5">Room Type</p>
      <div class="select is-link">
        <select>
          <option>Room Type</option>
          <option>With options</option>
        </select>
      </div>

      <p class="subtitle is-5">Bedtype</p>
      <div class="select is-link">
        <select>
          <option>Bed Type</option>
          <option>With options</option>
        </select>
      </div>

      <Modalforequipments modal1={modal1} setModal1={setModal1} />
      <nav class="level">
        <div class="level-item has-text-centered">
          <button
            className="button is-link is-light"
            data-target="modal-js-example"
            onClick={() => setModal1(true)}
          >
            Equipments
          </button>
        </div>
      </nav>

      <Modalforservice modal={modal} setModal={setModal} />
      <nav class="level">
        <div class="level-item has-text-centered">
          <button
            className="button is-link is-light"
            data-target="modal-js-example"
            onClick={() => setModal(true)}
          >
            Service
          </button>
        </div>
      </nav>

      <p class="subtitle is-5">Price/day</p>
      <div className="is-flex">
        <input class="input" type="text" placeholder="1,500"></input>Bath
      </div>

      <div class="buttons is-flex is-justify-content-center">
        <button class="button is-primary">Creatr Room</button>
        <button class="button is-link">Cancle</button>
      </div>

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

      <hr className="mt-0" />

      <ListTable />
    </AdminLayout>
  );
};

export default Rooms;
