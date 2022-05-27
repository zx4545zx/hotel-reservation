import { useState, useEffect } from "react";
import Modalforequipments from "../../compoment/Admin/room/Allequipments";
import Modalforservice from "../../compoment/Admin/room/Allservice";
import Modal from "../../compoment/Admin/Room/index/Modal";
import ListTable from "../../compoment/Admin/Room/index/ListTable";
import { useForm } from "react-hook-form";
import useUser from "../../../libs/useUser";

import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const Rooms = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const { register, handleSubmit, watch, setValue } = useForm();
  const [modalservice, setModalservice] = useState(false);
  const [modalequipments, setModalequipments] = useState(false);
  const [serviceroom, setserviceroom] = useState([]);
  const [equipmentsrooms, setequipmentsroom] = useState([]);
  const [listequipments, setListequipments] = useState([]);
  const [listservice, setListservice] = useState([]);
  const [roomtypes, setroomtypes] = useState([]);
  const [rooms, setrooms] = useState([]);
  const [bedtypes, setbedtypes] = useState([]);
  const [data,setData]= useState({});

  const onChange = (x) => {
    setData(x)
  }
  const createRoom = () => {
    axios
      .post("http://localhost:4000/rooms", data)
      .then((res) => {
        if (res.data) {
          for (const equipment of listequipments) {
            const listRoomEquipment = {
              room_id: res.data.id,
              equipmentsroom_id: equipment.id
            };
            axios
              .post("http://localhost:4000/list_room_equipments", listRoomEquipment)
          }
          for (const services of listservice) {
            const listRoomServices = {
              room_id: res.data.id,
              serviceroom_id: services.id
            };
            axios
              .post("http://localhost:4000/list_room_services", listRoomServices)
          }
        }
        window.location.reload();
      })
  }

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_room) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:4000/servicerooms")
      .then((res) => setserviceroom(res.data))
      ;

    axios
      .get("http://localhost:4000/equipmentsrooms")
      .then((res) => setequipmentsroom(res.data))
      ;

    axios
      .get("http://localhost:4000/roomtypes")
      .then((res) => setroomtypes(res.data))
      ;

    axios
      .get("http://localhost:4000/bedtypes")
      .then((res) => setbedtypes(res.data))
      ;

      axios
      .get("http://localhost:4000/rooms")
      .then((res) => setrooms(res.data))
      ;
  }, [])


  return (
    <AdminLayout>
      <form className="box" onChange={handleSubmit(onChange)}>

        <div className="title m-3 has-text-centered notification is-light">
          Rooms
        </div>
        <p className="subtitle is-5 mt-5">Name Room</p>
        <input className="input" type="text" placeholder="Ex. 704" {...register("name")}></input>
        <p className="subtitle is-5">Building</p>
        <input className="input" type="text" placeholder="Ex. A" {...register("building")}></input>
        <p className="subtitle is-5">Guest/Room</p>
        <input className="input" type="number" placeholder="Ex. 2" {...register("guest")}></input>

        <div className="level">
          <div >
            <p className="subtitle is-5">Room Type</p>
            <div className="select is-link">
              <select {...register("roomtype_id")}>
                <option>Room type</option>
                {roomtypes.map((s) => {
                  return (
                    <option value={s.id}>{s.name}</option>
                  )
                })}
              </select>
            </div>
          </div>

          <div>
            <p className="subtitle is-5">Bedtype</p>
            <div className="select is-link">
              <select {...register("bedtype_id")}>
                <option>Bed type</option>
                {bedtypes.map((s) => {
                  return (
                    <option value={s.id}>{s.name}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>

        <p className="subtitle is-5">Price/day</p>
        <div className="is-flex">
          <input className="input" type="text" placeholder="Ex. 1,500" {...register("price")}></input>Bath
        </div>
      </form>
      <Modalforequipments modalequipments={modalequipments} setModalequipments={setModalequipments} equipmentsrooms={equipmentsrooms} setListequipments={setListequipments} />
      <nav className="level">
        <div className="level-item has-text-centered is-vtop">
          <div className="container p-1">
            <button
              className="button is-link is-light"
              data-target="modal-js-example"
              onClick={() => setModalequipments(true)}
              type="button"
            >
              Equipments
            </button>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>List</th>
                </tr>
              </thead>
              <tbody>
                {listequipments.map((s, i) => {
                  return (
                    <tr key={s.id}>
                      <td>{i + 1}</td>
                      <td>{s.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>


        <Modalforservice modalservice={modalservice} setModalservice={setModalservice} serviceroom={serviceroom} setListservice={setListservice} />

        <div className="level-item has-text-centered">
          <div className="container p-1">
            <button
              className="button is-link is-light"
              data-target="modal-js-example"
              onClick={() => setModalservice(true)}
            >
              Service
            </button>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>List</th>
                </tr>
              </thead>
              <tbody>
                {listservice.map((s, i) => {
                  return (
                    <tr key={s.id}>
                      <td>{i + 1}</td>
                      <td>{s.name}</td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </div>
        </div>
      </nav>

      <div className="buttons is-flex is-justify-content-center">
        <button className="button is-primary" onClick={() => createRoom()}>Create Room</button>
        <button className="button is-link">Cancle</button>
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
      </div>

      <hr className="mt-0" />


      <ListTable rooms={rooms}/>

    </AdminLayout>
  );
};

export default Rooms;
