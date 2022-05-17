import { useState, useEffect } from "react";
import axios from "axios";

import Modal from "../../compoment/Admin/Room/Service/Modal";
import ListTable from "../../compoment/Admin/Room/Service/ListTable";

import AdminLayout from "../../compoment/Layout/AdminLayout";

const ServiceRooms = () => {
  const [modal, setModal] = useState(false);
  const [servicerooms, setServicerooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/servicerooms").then((res) => {
      setServicerooms(res.data);
    });
  });

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Service Rooms
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

      <ListTable servicerooms={servicerooms} />
    </AdminLayout>
  );
};

export default ServiceRooms;
