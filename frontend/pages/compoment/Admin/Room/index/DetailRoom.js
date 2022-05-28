import { useState, useEffect } from "react";
import axios from "axios";

const Detailfrom = ({ detailfrom, setdetailfrom, room }) => {
  const [roomtype, setRoomtype] = useState(null);
  const [bedtype, setbedtype] = useState(null);
  const [roomservices, setRoomservices] = useState([]);
  const [roomequipment, setRoomequipment] = useState([]);

  useEffect(() => {

    if (room != null && detailfrom) {
      console.log('room', room);
      setRoomequipment(room.equipmentsrooms);
      setRoomservices(room.servicerooms);
      if (roomtype == null) {
        axios.get("http://localhost:4000/roomtypes/" + room.roomtype_id)
          .then((res) => { setRoomtype(res.data) })
      }

      if (bedtype == null) {
        axios.get("http://localhost:4000/bedtypes/" + room.bedtype_id)
          .then((res) => { setbedtype(res.data) })
      }
    }
  })

  if (room != null && roomtype != null && bedtype != null) {
    return (
      <div id="modal-js-example" className={`modal ${detailfrom && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-content is-flex is-justify-content-center">
          <form className="box">
            <center>
              <b>Room{"\n"}</b>
            </center>
            <p>Name Room :{room.name + "\n"}</p>
            <p>Building :{room.building + "\n"}</p>
            <p>Guest/Room :{room.guest + "\n"}</p>
            <p> Roomtype :{roomtype != null ? roomtype.name : "null" + "\n"}</p>
            <p>Bedtype :{bedtype != null ? bedtype.name : "null" + "\n"}</p>
            <p>Price/Day :{room.price + "\n"}</p>
            <div className="level mt-2">
              <div className="mr-1">
                <b>Equipments{"\n"}</b>
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomequipment.map((s, i) => {
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
              <div className="ml-1">
                <b>Service</b>
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>List</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roomservices.map((s, i) => {
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
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setdetailfrom(false)}
        ></button>
      </div>
    );
  }
};

export default Detailfrom;