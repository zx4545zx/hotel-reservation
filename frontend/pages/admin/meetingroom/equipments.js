import ListTable from "../../compoment/Admin/MeetingRoom/Equipments/ListTable";
import Modal from "../../compoment/Admin/MeetingRoom/Equipments/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

import AdminLayout from "../../compoment/Layout/AdminLayout";

const EquipmentsMeetingRooms = () => {
  const [modal, setModal] = useState(false);
  const [equipments, setequipments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/equipment")
      .then((res) => setequipments(res.data));
  }, []);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Equipments Meeting Rooms
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

      <ListTable equipments={equipments} />
    </AdminLayout>
  );
};

export default EquipmentsMeetingRooms;
