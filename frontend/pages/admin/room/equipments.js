import ListTable from "../../compoment/Admin/Room/Equipments/ListTable";
import Modal from "../../compoment/Admin/Room/Equipments/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

import AdminLayout from "../../compoment/Layout/AdminLayout"

const EquipmentRooms = () => {
  const [modal, setModal] = useState(false);
  const [equipmentsroom, setequipmentsroom] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/equipmentsrooms")
      .then((res) => setequipmentsroom(res.data));
  },[])

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
      Equipments Rooms
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

      <ListTable equipmentsroom={equipmentsroom}/>
    </AdminLayout>
  );
};

export default EquipmentRooms;
