import { useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import ListTable from "../../compoment/Admin/MeetingRoom/Status/ListTable";


import AdminLayout from "../../compoment/Layout/AdminLayout"

const StatusMeetingRooms = () => {
  const [modal, setModal] = useState(false);
  const options = {
    mode: "range",
    minDate: "today",
    defaultTime: ["10:00", "11:00"],
    minTime: "16:00",
    maxTime: "22:30"
  };

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Status Meeting Rooms
      </div>
      
      
      <p class="level-item"><a>Date Picker Range</a></p>
      <nav class="level " >
      <p class="level-item"><Flatpickr options={options} /></p>
      </nav>
      
      <nav class="level " >
        <div class="level-item has-text-centered">
          <button
            className="button is-link"
          >Search
          </button>
        </div>
      </nav>
      <h1 className="is-size-4">List</h1>
      <hr className="mt-0" />
      <ListTable />
    </AdminLayout>
  );
};

export default StatusMeetingRooms;
