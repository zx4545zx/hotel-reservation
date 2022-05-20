import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../compoment/Admin/MeetingRoom/Modal";
import ListTable from "../../compoment/Admin/MeetingRoom/ListTable";

import AdminLayout from "../../compoment/Layout/AdminLayout";

const MeetingRooms = () => {
  const [modal, setModal] = useState(false);
  const [meetingroom, setmeetingroom] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/meeting_rooms")
      .then((res) => setmeetingroom(res.data));
  },[])

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Meeting Rooms
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

      <ListTable meetingroom={meetingroom}/>
    </AdminLayout>
  );
};

export default MeetingRooms;
