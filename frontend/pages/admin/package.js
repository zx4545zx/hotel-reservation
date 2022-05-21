import ModalMeetingRooms from "../compoment/Admin/Package/MeetingRooms";
import ModalRoom from "../compoment/Admin/Package/Rooms";
import ModalEquipmentsMeetingRooms from "../compoment/Admin/Package/EquipmentsMeetingRooms";
import ModalServiceMeetingRooms from "../compoment/Admin/Package/ServiceMeetingRooms";
import { useState, useEffect } from "react";
import axios from "axios";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

import AdminLayout from "../compoment/Layout/AdminLayout";

const Packages = () => {
  const [modal, setModal] = useState(false);
  const [packages, setPackages] = useState([]);
  const options = {
    mode: "range",
    minDate: "today",
    defaultTime: ["10:00", "11:00"],
    minTime: "16:00",
    maxTime: "22:30"
  };

  useEffect(() => {
    axios.get('http://localhost:4000/packages').then((res) => setPackages(res.data))
  })

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">Packages</div>
      <label>Package Name</label>
      <input
        className="input"
        type="text"
        placeholder="Package Name">
      </input>

      <div className="mt-5">Date Package</div>
      <nav className="level">
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Sunday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Monday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Tuesday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Wednesday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Thurday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Friday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input
              type="checkbox"
            />
            Saturday
          </label>
        </div>
      </nav>
      <nav className="level">
        <div className="level-item">
          <Flatpickr options={options} />
        </div>
      </nav>

      <ModalMeetingRooms modal={modal} setModal={setModal} />
      <nav className="level ">
        <div className="level-item">
          <button
            className="button is-link "
            onClick={() => setModal(true)}
          >Meeting Rooms
          </button>
        </div>

        <div className="level-item">
          <button
            className="button is-primary"
            onClick={() => setModal(true)}
          >Rooms
          </button>
        </div>

        <div className="level-item">
          <button
            className="button is-danger "
            onClick={() => setModal(true)}
          >Equipments Meeting Rooms
          </button>
        </div>

        <div className="level-item">
          <button
            className="button is-warning "
            onClick={() => setModal(true)}
          >Service Meeting Rooms
          </button>
        </div>
      </nav>
      <label>Summary</label>
      <div className="control">
        <textarea
          className="textarea is-focused"
          placeholder="Focused textarea"
        ></textarea>
      </div>

      <nav className="level mt-5">
        <p className="level-item"><a>Total price</a></p>
        <p className="level-item"><a>700000</a></p>
        <p className="level-item"><a>Baht</a></p>
      </nav>

      <nav className="level ">
        <p className="level-item"><a>Discount</a></p>
        <input className="level-item" type="number"></input>
        <div className="level-item">
          <div className="select">
            <select>
              <option>Percentage</option>
              <option>Baht</option>
            </select>
          </div></div>
      </nav>

      <nav className="level ">
        <p className="level-item"><a>Package price</a></p>
        <p className="level-item"><a>600000</a></p>
        <p className="level-item"><a>Baht</a></p>
      </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <button
            className="button is-link"
            title="Disabled button"
          >Cancel
          </button>
          <button
            className="button is-danger"
            title="Disabled button"
          >Save
          </button>
        </div>
      </nav>

      <h1 className="is-size-4">List</h1>
      <hr className="mt-0" />

      {packages.map(p => {
        return (<>
          <div>{p.name}</div>
          <div>{p.days}</div>
          <div>{p.start}</div>
          <div>{p.stop}</div>
        </>)
      })}

    </AdminLayout>
  );
};

export default Packages;
