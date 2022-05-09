import { useState } from "react";
import MenuService from "../../compoment/Admin/MeetingRoom/Menu/MenuService";

import Modal from "../../compoment/Admin/MeetingRoom/Service/Modal";
import ListTable from "../../compoment/Admin/MeetingRoom/Service/ListTable";

const ServiceMeetingRooms = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="title m-3 has-text-centered notification is-light">
        Service Meeting Rooms
      </div>
      <MenuService />

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
    </>
  );
};

export default ServiceMeetingRooms;
