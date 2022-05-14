import { useState } from "react";

import Modal from "../../compoment/Admin/Room/Equipments/Modal";
import ListTable from "../../compoment/Admin/Room/Equipments/ListTable";

import AdminLayout from "../../compoment/Layout/AdminLayout"

const Rooms = () => {
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Rooms
      </div>
      

      <Modal modal={modal} setModal={setModal} />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button class="button is-link is-rounded">Add</button>
      </div>

      <hr className="mt-0" />

      <ListTable />
    </AdminLayout>
  );
};

export default Rooms;
