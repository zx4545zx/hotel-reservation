import ModalMeetingRooms from "../compoment/Admin/Package/MeetingRooms"
import ModalRoom from "../compoment/Admin/Package/Rooms"
import ModalEquipmentsMeetingRooms from "../compoment/Admin/Package/EquipmentsMeetingRooms"
import ModalServiceMeetingRooms from "../compoment/Admin/Package/ServiceMeetingRooms"
import { useState } from "react";

import AdminLayout from "../compoment/Layout/AdminLayout"

const Packages = () => {
  const [modal, setModal] = useState(false);

  return (
    <AdminLayout>
      <div className="title mt-5">Packages</div>
      <label>Package Name</label>
      <input
        className="input"
        type="text"
        placeholder="Package Name">
      </input>
      
      <label>Date Package</label>
      <nav class="level">
        <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Sunday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Monday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Tuesday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Wednesday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Thurday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Friday
      </label>
      </div>
      <div class="level-item has-text-centered">
      <label className="checkbox">
        <input
          type="checkbox"
        />
        Saturday
      </label>
      </div>
      </nav>

      <ModalMeetingRooms modal={modal} setModal={setModal}/>
      <nav class="level">
      <div class="level-item has-text-centered">
      <button
        className="button is-link is-light"
        data-target="modal-js-example"
        onClick={() => setModal(true)}
        >Meeting Rooms
      </button>
      </div>
      </nav>
      
      <nav class="level">
      <div class="level-item has-text-centered">
      <button
        className="button is-primary is-light"
        onClick={() => setModal(true)}
        >Rooms
      </button>
      </div>
      </nav>

      <nav class="level">
      <div class="level-item has-text-centered">
      <button
        className="button is-danger is-light"
        onClick={() => setModal(true)}
        >Equipments Meeting Rooms
      </button>
      </div>
      </nav>
      <nav class="level ">
      <div class="level-item has-text-centered">
      <button
        className="button is-warning is-light is-flex "
        onClick={() => setModal(true)}
        >Service Meeting Rooms
      </button>
      </div>
      </nav>

      <label>Summary</label>
      <div class="control">
        <textarea
          class="textarea is-focused"
          placeholder="Focused textarea">
        </textarea>
      </div>

      <nav class="level ">
      <label>Total price</label>
      <label>700000</label>
      <label>Baht</label>
      </nav>

      <nav class="level ">
      <label>Discount</label>
      <input type="number"></input>
      <div class="select">
        <select>
          <option>Percentage</option>
          <option>Baht</option>
        </select>
      </div>
      </nav>

      <nav class="level ">
      <label>Package price</label>
      <label>600000</label>
      <label>Baht</label>
      </nav>

      <div class="level-item has-text-centered">
      <button
        className="button is-link"
        title="Disabled button"
        disabled>Cancel
      </button>
      <button
        className="button is-danger"
        title="Disabled button"
        disabled>Save
      </button>
      </div>

    </AdminLayout>
  );
};

export default Packages;
