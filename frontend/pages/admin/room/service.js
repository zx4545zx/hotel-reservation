import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../compoment/Admin/Room/Service/Modal";
import ListTable from "../../compoment/Admin/Room/Service/ListTable";

import AdminLayout from "../../compoment/Layout/AdminLayout";
import useUser from "../../../libs/useUser";

const ServiceRooms = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [modal, setModal] = useState(false);
  const [servicerooms, setServicerooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/servicerooms").then((res) => {
      setServicerooms(res.data);
    });
  },[]);

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_room_ser) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

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
