import ListTable from "../../compoment/Admin/Room/roomtype/ListTable";
import Modal from "../../compoment/Admin/Room/roomtype/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";
import useUser from "../../../libs/useUser";

const RoomType = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [modal, setModal] = useState(false);
  const [roomtype, setRoomtypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/roomtypes").then((res) => {
      setRoomtypes(res.data);
    });
  },[]);

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_room_type) {
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
        Roomtype
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

      <ListTable roomtype={roomtype} />
    </AdminLayout>
  );
};

export default RoomType;
