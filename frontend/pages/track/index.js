import Layout from "../compoment/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Track = () => {
  const { register, handleSubmit } = useForm();
  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [equiAmount, setEquiAmount] = useState([]);
  const [services, setService] = useState([]);
  const [serAmount, setSerAmount] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/reservations").then((res) => {
      setReservations(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    const reser = reservations.find((r) => r.tracking === data.tracking);

    if (reser === undefined) {
      setShow(false);
      return;
    }

    axios.get(`http://localhost:4000/reservations/${reser.id}`).then((res) => {
      const {
        meeting_rooms,
        equipments,
        reservation_equipments,
        services,
        reservation_services,
        customer,
      } = res.data;

      setReservation(res.data);
      setMeetingRooms(meeting_rooms);
      setCustomer(customer);

      let Eamount = reservation_equipments.map((v) => v.amount);
      setEquiAmount(Eamount);
      setEquipments(equipments);

      let Samount = reservation_services.map((v) => v.amount);
      setSerAmount(Samount);
      setService(services);

      setShow(true);
    });
  };

  return (
    <Layout>
      <main className="py-5">
        <section className="block card hero is-warning is-small">
          <div className="hero-body">
            <p className="title">Track Search</p>
            <p className="subtitle"></p>
          </div>
        </section>

        <div className="columns">
          <div className="column"></div>
          <div className="column is-two-thirds">
            <form
              className="field has-addons"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="control is-expanded">
                <div className="is-fullwidth">
                  <input className="input" {...register("tracking")} />
                </div>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">
                  Search
                </button>
              </div>
            </form>

            <hr />

            {show && (
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
                              <span className="tag is-dark is-medium m-0">
                                Q
                              </span>
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
                                <span className="tag is-dark is-medium">
                                  Check In
                                </span>
                                <span className="tag is-success is-medium">
                                  {reservation.check_in}
                                </span>
                              </div>
                            </div>

                            <strong className="mr-3">-</strong>

                            <div className="control">
                              <div className="tags has-addons">
                                <span className="tag is-dark is-medium">
                                  Check Out
                                </span>
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
                                </tr>
                              </thead>
                              <tbody>
                                {meetingRooms.map((m, i) => {
                                  return (
                                    <tr key={m.id}>
                                      <td>{m.name}</td>
                                      <td>{`Meeting Room`}</td>
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
                          </div>
                        </div>
                        <div className="column">
                          <div>
                            <h1 className="title is-5 m-0">Quotations</h1>

                            <hr className="my-2" />

                            <div className="block box"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/track/payment_slip" passHref>
                    <a>Payment</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="column"></div>
        </div>
      </main>
    </Layout>
  );
};

export default Track;
