import ModalMeetingRooms from "../compoment/Admin/Package/MeetingRooms";
import ModalRoom from "../compoment/Admin/Package/Rooms";
import ModalEquipmentsMeetingRooms from "../compoment/Admin/Package/EquipmentsMeetingRooms";
import ModalServiceMeetingRooms from "../compoment/Admin/Package/ServiceMeetingRooms";

import { useState, useEffect } from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import ListTable from "../compoment/Admin/Package/ListTable";
import axios from "axios";
import { useForm } from "react-hook-form";
import useUser from "../../libs/useUser";

import AdminLayout from "../compoment/Layout/AdminLayout";

const Packages = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [modalMR, setModalMR] = useState(false);
  const [modalR, setModalR] = useState(false);
  const [modalEMR, setModalEMR] = useState(false);
  const [modalSMR, setModalSMR] = useState(false);
  const [packages, setpackages] = useState([]);
  const [meetingroom, setmeetingroom] = useState([]);
  const [equipment, setequipment] = useState([]);
  const [services, setservices] = useState([]);
  const [room, setroom] = useState([]);
  const [list, setList] = useState([]);
  const [listPackageRoom, setListPackageRoom] = useState([]);
  const [listPackageEquipment, setListPackageEquipment] = useState([]);
  const [listPackageServices, setListPackageServices] = useState([]);
  const [disOption, setDisOption] = useState(0);
  const [disInput, setDisInput] = useState(0);
  const [packagePrices, setPackagePrice] = useState(0);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  let i = 1;
  let totalPrice = 0;
  //let disOption=0;
  //let disInput=0;
  let discount=0;
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
      .then((res) => setpackages(res.data))
      ;

    axios
      .get("http://localhost:4000/meeting_rooms")
      .then((res) => setmeetingroom(res.data))
      ;

    axios
      .get("http://localhost:4000/roomtypes")
      .then((res) => setroom(res.data))
      ;

    axios
      .get("http://localhost:4000/equipment")
      .then((res) => setequipment(res.data))
      ;

    axios
      .get("http://localhost:4000/services")
      .then((res) => setservices(res.data))
      ;

    // axios
    //   .get("http://localhost:4000/services")
    //   .then((res) => setservices(res.data))
    // ;
  }, [])

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_package) {
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

      <ModalMeetingRooms modalMR={modalMR} setModalMR={setModalMR} meetingroom={meetingroom} list={list} setList={setList} />
      <nav className="level ">
        <div className="level-item">
          <button
            className="button is-link "
            onClick={() => setModalMR(true)}
          >Meeting Rooms
          </button>
        </div>

        <ModalRoom modalR={modalR} setModalR={setModalR} room={room} setListPackageRoom={setListPackageRoom} />
        <div className="level-item">
          <button
            className="button is-primary"
            onClick={() => setModalR(true)}
          >Rooms
          </button>
        </div>

        <ModalEquipmentsMeetingRooms modalEMR={modalEMR} setModalEMR={setModalEMR} equipment={equipment} setListPackageEquipment={setListPackageEquipment} />
        <div className="level-item">
          <button
            className="button is-danger "
            onClick={() => setModalEMR(true)}
          >Equipments Meeting Rooms
          </button>
        </div>

        <ModalServiceMeetingRooms modalSMR={modalSMR} setModalSMR={setModalSMR} services={services} setListPackageServices={setListPackageServices} />
        <div className="level-item">
          <button
            className="button is-warning "
            onClick={() => setModalSMR(true)}
          >
            Service Meeting Rooms
          </button>
        </div>
      </nav>

      <label>Summary</label>


      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>List</th>
            <th>Value</th>
            <th>Price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((s) => {
            totalPrice += parseFloat(s.price);
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{s.name}</td>
                <td>{1}</td>
                <td>{s.price}</td>
                <td>{s.price}</td>
              </tr>
            )
          })}
          {listPackageRoom.map((s) => {
            totalPrice += parseFloat(s.price * s.value);
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{s.name}</td>
                <td>{s.value ? s.value : s.value = 1}</td>
                <td>{s.price}</td>
                <td>{(s.price * s.value).toFixed(1)}</td>
              </tr>
            )
          })}
          {listPackageEquipment.map((s) => {
            totalPrice += parseFloat(s.price * s.value);
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{s.name}</td>
                <td>{s.value ? s.value : s.value = 1}</td>
                <td>{s.price}</td>
                <td>{(s.price * s.value).toFixed(1)}</td>
              </tr>
            )
          })}
          {listPackageServices.map((s) => {
            totalPrice += parseFloat(s.price * s.value);
            return (
              <tr key={i}>
                <td>{i++}</td>
                <td>{s.name}</td>
                <td>{s.value ? s.value : s.value = 1}</td>
                <td>{s.price}</td>
                <td>{(s.price * s.value).toFixed(1)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>



      <nav className="level mt-5">
        <p className="level-item">
          <a>Total price</a>
        </p>
        <p className="level-item">
          <a>{totalPrice.toFixed(1)}</a>
        </p>
        <p className="level-item">
          <a>Baht</a>
        </p>
      </nav>

      <nav className="level ">
        <p className="level-item">
          <a>Discount</a>
        </p>

        <input className="level-item" type="number" onChange={(event) => setDisInput(event.target.value)}></input>
        <div className="level-item">
          <div className="select">
            <select onChange={(event) => setDisOption(event.target.value)}>
              <option value={0}>Percentage</option>
              <option value={1}>Baht</option>
            </select>
          </div>
        </div>
      </nav>

      <div className="level-item has-text-centered mb-5">
        <button className="button is-primary " title="Disabled button" 
        onClick={()=>{disOption==0 ? ( setPackagePrice(totalPrice*(disInput/100)))
        :(setPackagePrice(disInput))}}>
          Calculate Package price
        </button>
      </div>

      <nav className="level mt-5">
        <p className="level-item">
          <a>Package price</a>
        </p>
        <p className="level-item">
          <a>{(totalPrice-packagePrices).toFixed(1)}</a>
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

      <ListTable packages={packages} />

    </AdminLayout>
  );
};

export default Packages;


