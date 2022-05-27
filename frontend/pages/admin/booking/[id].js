import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
  const router = useRouter();
  const { id } = router.query;

  const [reservation, setReservation] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [equiAmount, setEquiAmount] = useState([]);
  const [services, setService] = useState([]);
  const [serAmount, setSerAmount] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const [roomType, setRoomType] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomTypeAmount, setRoomTypeAmount] = useState([]);
  const [addon, setAddon] = useState([]);
  const [addonAmount, setAddonAmount] = useState([]);
  const [butget, setButget] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    axios.get(`http://localhost:4000/reservations/${id}`).then((res) => {
      const {
        meeting_rooms,
        equipments,
        reservation_equipments,
        services,
        reservation_services,
        customer,
        quotations,
        roomtypes,
        reservation_room_types,
        addonservicerooms,
        reservation_addonservicerooms,
      } = res.data;

      axios.get("http://localhost:4000/rooms").then((res) => {
        let a;
        if (roomtypes[0]) {
          a = res.data.filter((v) => v.roomtype_id == roomtypes[0].id);
        }
        // console.log(a);
        setRooms(res.data);
      });

      setReservation(res.data);
      setMeetingRooms(meeting_rooms);
      setCustomer(customer);

      let Eamount = reservation_equipments.map((v) => v.amount);
      setEquiAmount(Eamount);
      setEquipments(equipments);

      let Samount = reservation_services.map((v) => v.amount);
      setSerAmount(Samount);
      setService(services);

      let Ramount = reservation_room_types.map((v) => v.amount);
      setRoomTypeAmount(Ramount);
      setRoomType(roomtypes);

      setQuotations(quotations);

      let Aamount = reservation_addonservicerooms.map((v) => v.amount);
      setAddonAmount(Aamount);
      setAddon(addonservicerooms);
    });
  }, [router.isReady]);

  const ApprovQuot = (data) => {
    data.status = "approved";
    axios
      .patch("http://localhost:4000/quotations/" + data.id, data)
      .then((res) => window.location.reload());
  };

  const CancelQuot = (data) => {
    data.status = "cancelled";
    axios
      .patch("http://localhost:4000/quotations/" + data.id, data)
      .then((res) => window.location.reload());
  };

  const RewindQuot = (data) => {
    data.status = "pending";
    axios
      .patch("http://localhost:4000/quotations/" + data.id, data)
      .then((res) => window.location.reload());
  };

  const CreateQuot = () => {
    let data = { butget: butget, reservation_id: id };
    axios.post("http://localhost:4000/quotations", data).then((res) => {
      setModal(false);
      window.location.reload();
    });
  };

  const PaymentDone = () => {
    let data = reservation;
    data.status = "paid";
    axios
      .patch("http://localhost:4000/reservations/" + id, data)
      .then((res) => window.location.reload());
  };

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
              <div className="box">
                <div className="is-flex is-justify-content-space-between">
                  <div className="is-flex is-align-items-center">
                    <div className="tags has-addons m-0 mr-4">
                      <span className="tag is-dark is-medium m-0">Q</span>
                      <span className="tag is-primary is-medium m-0">
                        {reservation.queue}
                      </span>
                    </div>
                    <h1 className="m-0">
                      {customer.first_name} {customer.last_name}
                    </h1>
                    <div className="tags">
                      <div className="tag is-info my-0 mx-4">
                        {customer.email}
                      </div>
                      <div className="tag is-info m-0">
                        {customer.phone_number}
                      </div>
                    </div>
                  </div>
                  <h1
                    className={`m-0 tag is-large ${
                      reservation.status == "pending"
                        ? "is-warning"
                        : reservation.status == "confirmed"
                        ? "is-primary"
                        : "is-success"
                    }`}
                  >
                    {reservation.status}
                  </h1>
                </div>

                <hr />

                <div className="is-flex is-justify-content-space-between">
                  <div className="tags has-addons m-0">
                    <span className="tag is-dark is-medium">Guest</span>
                    <span className="tag is-primary is-medium">
                      {reservation.guest}
                    </span>
                  </div>

                  <div className="tags has-addons m-0">
                    <span className="tag is-primary is-large">
                      {reservation.price}
                    </span>
                    <span className="tag is-dark is-large">THB</span>
                  </div>
                </div>

                <div className="is-flex is-justify-content-space-between">
                  <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                      <div className="tags has-addons">
                        <span className="tag is-dark is-medium">Check In</span>
                        <span className="tag is-success is-medium">
                          {reservation.check_in}
                        </span>
                      </div>
                    </div>

                    <strong className="mr-3">-</strong>

                    <div className="control">
                      <div className="tags has-addons">
                        <span className="tag is-dark is-medium">Check Out</span>
                        <span className="tag is-danger is-medium">
                          {reservation.check_out}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="tags has-addons m-0">
                    <span className="tag is-dark is-medium">Track</span>
                    <span className="tag  is-link is-medium">
                      {reservation.tracking}
                    </span>
                  </div>
                </div>

                <hr />

                {reservation.status != "paid" && (
                  <div className="is-flex is-justify-content-flex-end">
                    <button
                      className="button is-success"
                      onClick={() => PaymentDone()}
                    >
                      Paid
                    </button>
                  </div>
                )}
              </div>

              <div className="columns">
                <div className="column">
                  <div>
                    <h1 className="title is-5 m-0">All List</h1>

                    <hr className="my-2" />

                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Room Name</th>
                          <th>Type</th>
                          <th>Price</th>
                          <th>status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meetingRooms.map((m, i) => {
                          return (
                            <tr key={m.id}>
                              <td>{m.name}</td>
                              <td>{`Meeting Room`}</td>
                              <td>{m.price}</td>
                              <td>{m.status}</td>
                            </tr>
                          );
                        })}

                        {rooms.slice(0, roomTypeAmount[0]).map((m, i) => {
                          return (
                            <tr key={m.id}>
                              <td>{m.name}</td>
                              <td>{m.roomtype.name}</td>
                              <td>{m.price}</td>
                              <td>{m.status}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr />

                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Equipment</th>
                          <th>Amount</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {equipments.map((m, i) => {
                          return (
                            <tr key={m.id}>
                              <td>{m.name}</td>
                              <td>{equiAmount[i]}</td>
                              <td>{m.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr />

                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Service</th>
                          <th>Amount</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((m, i) => {
                          return (
                            <tr key={m.id}>
                              <td>{m.name}</td>
                              <td>{serAmount[i]}</td>
                              <td>{m.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <hr />

                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th>Add-on Service</th>
                          <th>Amount</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {addon.map((m, i) => {
                          return (
                            <tr key={m.id}>
                              <td>{m.name}</td>
                              <td>{addonAmount[i]}</td>
                              <td>{m.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="column">
                  <div>
                    <div className="is-flex is-justify-content-space-between">
                      <h1 className="title is-5 m-0">Quotations</h1>
                      <button
                        className="button is-success is-small"
                        onClick={() => setModal(true)}
                      >
                        New
                      </button>
                    </div>

                    <hr className="my-2" />

                    {quotations.map((q) => {
                      return (
                        <div key={q.id}>
                          <div className="block box">
                            <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                              <h1 className="m-0">Butget: {q.butget} THB</h1>
                              <h1
                                className={`m-0 tag is-large ${
                                  q.status == "pending"
                                    ? "is-warning"
                                    : q.status == "approved"
                                    ? "is-success"
                                    : "is-danger"
                                }`}
                              >
                                {q.status}
                              </h1>
                            </div>

                            {q.status == "pending" ? (
                              <div className="buttons">
                                <button
                                  className="button is-success is-fullwidth"
                                  onClick={() => ApprovQuot(q)}
                                >
                                  Approv
                                </button>
                                <button
                                  className="button is-danger is-fullwidth"
                                  onClick={() => CancelQuot(q)}
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button
                                className="button is-warning is-fullwidth"
                                onClick={() => RewindQuot(q)}
                              >
                                Rewind
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={`modal ${modal && "is-active"}`}>
                  <div
                    className="modal-background"
                    onClick={() => setModal(false)}
                  ></div>
                  <div className="modal-content">
                    <div className="box">
                      <label htmlFor="butget" className="mb-3">
                        Butget
                      </label>
                      <input
                        className="input mb-3"
                        name="butget"
                        type="number"
                        placeholder="0"
                        onChange={(e) => setButget(e.target.value)}
                      />
                      <button
                        className="button is-success"
                        onClick={() => CreateQuot()}
                      >
                        New
                      </button>
                    </div>
                  </div>
                  <button
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={() => setModal(false)}
                  ></button>
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
