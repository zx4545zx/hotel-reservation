import ModalMeetingRooms from "../compoment/Admin/Package/MeetingRooms";
import ModalRoom from "../compoment/Admin/Package/Rooms";
import ModalEquipmentsMeetingRooms from "../compoment/Admin/Package/EquipmentsMeetingRooms";
import ModalServiceMeetingRooms from "../compoment/Admin/Package/ServiceMeetingRooms";

import { useState, useEffect} from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import ListTable from "../compoment/Admin/Package/ListTable";
import axios from "axios";
import useUser from "../../libs/useUser";

import AdminLayout from "../compoment/Layout/AdminLayout";

const Packages = () => {
  const [modalMR, setModalMR] = useState(false);
  const [modalR, setModalR] = useState(false);
  const [modalEMR, setModalEMR] = useState(false);
  const [modalSMR, setModalSMR] = useState(false);
  const [packages, setpackages] = useState([]);
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_package) {
    return (
      <AdminLayout>
        <div class="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  const [modal, setModal] = useState(false);
  const options = {
    mode: "range",
    minDate: "today",
    defaultTime: ["10:00", "11:00"],
    minTime: "16:00",
    maxTime: "22:30",
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/packages")
      .then((res) => setpackages(res.data));
  },[])


  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Packages
      </div>
      <label>Package Name</label>
      <input className="input" type="text" placeholder="Package Name"></input>

      <div className="mt-5">Date Package</div>
      <nav className="level">
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Sunday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Monday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Tuesday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Wednesday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Thurday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Friday
          </label>
        </div>
        <div className="level-item has-text-centered">
          <label className="checkbox">
            <input type="checkbox" />
            Saturday
          </label>
        </div>
      </nav>
      <nav className="level">
        <div className="level-item">
          <Flatpickr options={options} />
        </div>
      </nav>
    
      <ModalMeetingRooms modalMR={modalMR} setModalMR={setModalMR} />
      <nav class="level ">
        <div class="level-item">
          <button
            className="button is-link "
            onClick={() => setModalMR(true)}
          >Meeting Rooms
          </button>
        </div>

        <ModalRoom modalR={modalR} setModalR={setModalR} />
        <div class="level-item">
          <button
            className="button is-primary"
            onClick={() => setModalR(true)}
          >Rooms
          </button>
        </div>
     
        <ModalEquipmentsMeetingRooms modalEMR={modalEMR} setModalEMR={setModalEMR} />
        <div class="level-item">
          <button
            className="button is-danger "
            onClick={() => setModalEMR(true)}
          >Equipments Meeting Rooms
          </button>
        </div>
      
        <ModalServiceMeetingRooms modalSMR={modalSMR} setModalSMR={setModalSMR} />
        <div class="level-item">
          <button
            className="button is-warning "
            onClick={() => setModalSMR(true)}
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
        <p className="level-item">
          <a>Total price</a>
        </p>
        <p className="level-item">
          <a>700000</a>
        </p>
        <p className="level-item">
          <a>Baht</a>
        </p>
      </nav>

      <nav className="level ">
        <p className="level-item">
          <a>Discount</a>
        </p>

        <input className="level-item" type="number"></input>
        <div className="level-item">
          <div className="select">
            <select>
              <option>Percentage</option>
              <option>Baht</option>
            </select>

          </div>
        </div>
      </nav>

      <nav className="level ">
        <p className="level-item">
          <a>Package price</a>
        </p>
        <p className="level-item">
          <a>600000</a>
        </p>
        <p className="level-item">
          <a>Baht</a>
        </p>
      </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <button className="button is-link" title="Disabled button">
            Cancel
          </button>
          <button className="button is-danger" title="Disabled button">
            Save

          </button>
        </div>
      </nav>

      <h1 className="is-size-4">List</h1>
      <hr className="mt-0" />

      <ListTable packages={packages}/>

    </AdminLayout>
  );
};

export default Packages;
