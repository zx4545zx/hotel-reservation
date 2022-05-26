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
  const [disInput, setDisInput] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [start, setStart] = useState(new Date());
  const [stop, setStop] = useState(new Date());
  const [dataForm1, setDataForm1] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  let i = 1;
  let totalPrice = 0;
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
  }, [])

  const onChange1=(x)=>{
    setDataForm1(x);
  }
  const onChange2=(x)=>{
    setDataForm2(x);
  }
  const createPackage = () => {
    const data={...dataForm1};
    let days = '';
    for (const day of data.allday) {
      days += day
    }
    delete data.allday
    data.days=days;
    data.price = totalPrice;
    data.dis_price = (totalPrice - discount);
    data.start=start;
    data.stop=stop;

    axios
      .post("http://localhost:4000/packages", data)
      .then((res) => {
          for (const meetingroom of list) {
            const saveMeetingRoom = {
              packages_id: res.data.id,
              meeting_rooms_id: meetingroom.id
            };
            axios
              .post("http://localhost:4000/list_package_meetingrooms", saveMeetingRoom)
              .then((res)=>{
                console.log('list_package_meetingrooms',saveMeetingRoom)
                console.log('list_package_meetingrooms res',res.data)
              })
          }
          for (const room of listPackageRoom) {
            const saveRoom = {
              packages_id: res.data.id,
              roomtypes_id: room.id,
              value: room.value
            };
            axios
              .post("http://localhost:4000/list_package_rooms", saveRoom)
              .then((res)=>{
                console.log('list_package_equipments',saveRoom)
                console.log('list_package_equipments res',res.data)
              })
          }
          for (const equipment of listPackageEquipment) {
            const saveEquipment = {
              packages_id: res.data.id,
              equipment_id: equipment.id,
              value: equipment.value
            };
            axios
              .post("http://localhost:4000/list_package_equipments", saveEquipment)
              .then((res)=>{
                console.log('list_package_equipments',saveEquipment)
                console.log('list_package_equipments res',res.data)
              })
          }
          for (const services of listPackageServices) {
            const saveServices = {
              packages_id: res.data.id,
              services_id: services.id,
              value: services.value
            };
            axios
              .post("http://localhost:4000/list_package_services", saveServices)
              .then((res)=>{
                console.log('list_package_services',saveServices)
                console.log('list_package_services res',res.data)
              })
          }
        
      })
  }

  return (
    <AdminLayout>
      <form className="box" onChange={handleSubmit(onChange1)}>
        <div className="title m-3 has-text-centered notification is-light">
          Packages
        </div>

        <label>Package Name</label>
        <input className="input" type="text" placeholder="Package Name" {...register("name")}></input>

        <div className="mt-5">Date Package</div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="1"
              />
              Sunday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="2"
              />
              Monday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="3"
              />
              Tuesday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="4"
              />
              Wednesday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="5"
              />
              Thurday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="6"
              />
              Friday
            </label>
          </div>
          <div className="level-item has-text-centered">
            <label className="checkbox">
              <input type="checkbox"
                {...register("allday")}
                value="7"
              />
              Saturday
            </label>
          </div>
        </nav>
        <nav className="level">
          <div className="level-item">
            <Flatpickr options={options}
              onChange={([start, stop]) => {
                setStart(start);
                setStop(stop);
              }}
            />
          </div>
        </nav>
      </form>


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

          <input className="level-item" type="number" onChange={(event) => {
            setDisInput(event.target.value);
          }}></input>
          <div className="level-item">
            <div className="select">
              <select onChange={(event) => {
                const x = event.target.value;
                if (x == 0) setDiscount(totalPrice * (disInput / 100));
                else if (x == 1) setDiscount(disInput);
                else setDiscount(0)
              }}>
                <option>Please choose</option>
                <option value={0}>Percentage</option>
                <option value={1}>Baht</option>
              </select>
            </div>
          </div>
        </nav>

        <nav className="level mt-5">
          <p className="level-item">
            <a>Package price</a>
          </p>
          <p className="level-item">
            <a>{(totalPrice - discount).toFixed(1)}</a>
          </p>
          <p className="level-item">
            <a>Baht</a>
          </p>
        </nav>
      <nav className="level">
        <div className="level-item has-text-centered">
          <button className="button is-primary" title="Disabled button" onClick={() => createPackage()}>
            Create Package
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


