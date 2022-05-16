import ListTable from "../../compoment/Admin/Room/bedtype/ListTable";
import Modal from "../../compoment/Admin/Room/bedtype/Modal";
import { useState } from "react";

import AdminLayout from "../../compoment/Layout/AdminLayout"

const BedtypeRooms = () => {
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
      Bedtype Rooms
      </div>
      

      <Modal modal={modal} setModal={setModal} />

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

export default BedtypeRooms;
