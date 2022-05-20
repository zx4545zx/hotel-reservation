import ListTable from "../../compoment/Admin/Room/addonservice/ListTable";
import Modal from "../../compoment/Admin/Room/addonservice/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const AddonServiceRooms = () => {
  const [modal, setModal] = useState(false);
  const [addonservices, setAddonservices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/addonservice").then((res) => {
      setAddonservices(res.data);
    });
  },[]);
  
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Add-on Service Rooms
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

      <ListTable addonservices={addonservices} />
    </AdminLayout>
  );
};

export default AddonServiceRooms;
