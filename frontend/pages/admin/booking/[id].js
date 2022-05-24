import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const Reservation = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reservation, setReservation] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [equiAmount, setEquiAmount] = useState([]);
  const [services, setService] = useState([]);
  const [serAmount, setSerAmount] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;

    axios.get(`http://localhost:4000/reservations/${id}`).then((res) => {
      const {
        meeting_rooms,
        equipments,
        reservation_equipments,
        services,
        reservation_services,
      } = res.data;

      setReservation(res.data);
      setMeetingRooms(meeting_rooms);

      let Eamount = reservation_equipments.map((v) => v.amount);
      setEquiAmount(Eamount);
      setEquipments(equipments);

      let Samount = reservation_services.map((v) => v.amount);
      setSerAmount(Samount);
      setService(services);
    });
  }, [router.isReady]);

  return (
    <AdminLayout>
      <div>
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by1">
              <img
                src="https://bulma.io/images/placeholders/720x240.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <div>
                    <h1 className="title is-5 m-0">All List</h1>

                    <hr className="my-2" />

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meetingRooms.map((m, i) => {
                          return (
                            <tr key={i}>
                              <td>{m.name}</td>
                              <td>{`Meeting Room`}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr />

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipments.map((m, i) => {
                          return (
                            <tr key={i}>
                              <td>{m.name}</td>
                              <td>{equiAmount[i]}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr />

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((m, i) => {
                          return (
                            <tr key={i}>
                              <td>{m.name}</td>
                              <td>{serAmount[i]}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="column">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reservation;
