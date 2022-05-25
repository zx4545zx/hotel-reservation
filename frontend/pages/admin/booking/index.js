import { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useForm } from "react-hook-form";
import axios from "axios";
import useUser from "../../../libs/useUser";

import { bookingForm } from "../../../libs/utils/bookingForm";
import AdminLayout from "../../compoment/Layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "flatpickr/dist/themes/material_green.css";
import Router from "next/router";

const Booking = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [add, setAdd] = useState(false);
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(true);
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(null);

  const [customers, setCustomers] = useState([]);

  const [customer, setCustomer] = useState([]);
  const [pack, setPack] = useState([]);
  const [roomType, setRoomType] = useState([]);
  const [date, setDate] = useState([]);
  const [guest, setGuest] = useState(0);
  const [butget, setButget] = useState(0);
  const [equipment, setEquipment] = useState([]);
  const [service, setService] = useState([]);

  const [val, setVal] = useState([]);
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);

  const options = {
    mode: "range",
    minDate: "today",
    altInput: true,
    altInputClass: "input has-text-centered pointer",
    altFormat: "j F Y",
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/customers")
      .then((res) => setCustomers(res.data));
  }, []);

  const convertDate = () => {
    const checkIn = date[0];
    const checkOut = date[1];
    const guest_number = guest;

    if (checkIn === undefined || checkOut === undefined) {
      return;
    }

    checkIn.setHours(15, 0, 0);
    checkOut.setHours(12, 0, 0);

    const value = {
      day_checkin: checkIn.toGMTString().toString().substring(0, 16),
      time_checkin: checkIn.toLocaleTimeString().toString().substring(0, 5),
      day_checkout: checkOut.toGMTString().toString().substring(0, 16),
      time_checkout: checkOut.toLocaleTimeString().toString().substring(0, 5),
      guest_number: guest_number,
    };

    setVal(value);
  };

  const fndiffDay = () => {
    const checkIn = new Date(val.day_checkin);
    const checkOut = new Date(val.day_checkout);
    const diffTime = checkOut.getTime() - checkIn.getTime();
    const diffDay = diffTime / (1000 * 3600 * 24);

    return diffDay;
  };

  const totalPrice = () => {
    let sum = 0;

    if (date.length > 1) {
      var diffDay = fndiffDay();
    }
    if (result.length == 0 && roomType.length == 0) {
      return 0;
    }
    if (pack.length == 0 || result.length == 0 || roomType.length == 0) {
      let eq = 0;
      let se = 0;

      result.map((v) => {
        sum += parseInt(v.price);

        v.equipment.map((v) => {
          eq += parseInt(v.price) * parseInt(v.amount);
        });

        v.service.map((v) => {
          se += parseInt(v.price) * parseInt(v.amount);
        });
      });

      let ok = eq + se + sum * diffDay;

      setTotal(ok);
      return ok;
    }

    return sum;
  };

  const confirmSubmit = () => {
    console.log("roomType-----------");
    console.log(roomType);
    console.log("packages-----------");
    console.log(pack);
    console.log("--------------");

    const ci = new Date(date[0]);
    const co = new Date(date[1]);
    ci.setHours(15, 0, 0);
    co.setHours(12, 0, 0);
    const checkIn = ci.toLocaleString("en-US", "Asia/Jakarta").replace(",", "");
    const checkOut = co
      .toLocaleString("en-US", "Asia/Jakarta")
      .replace(",", "");

    const body = bookingForm(
      guest,
      checkIn,
      checkOut,
      total,
      butget,
      customer,
      user,
      service,
      "",
      "",
      result,
      equipment
    );

    console.log(body);

    axios.post("http://localhost:4000/reservations", body).then((res) => {
      console.log(res.data);

      result.map((b) => {
        axios
          .post("http://localhost:4000/reservation_meeting_rooms", {
            reservation_id: res.data.id,
            meeting_room_id: b.id,
            amount: result.length,
          })
          .then((res) => console.log("reservation_meeting_room"));

        b.service.map((b) => {
          axios
            .post("http://localhost:4000/reservation_services", {
              reservation_id: res.data.id,
              service_id: b.id,
              amount: b.amount,
            })
            .then((res) => console.log("reservation_services"));
        });

        b.equipment.map((b) => {
          axios
            .post("http://localhost:4000/reservation_equipments", {
              reservation_id: res.data.id,
              equipment_id: b.id,
              amount: b.amount,
            })
            .then((res) => console.log("reservation_equipments", b.amount));
        });
      });

      Router.replace(`/admin/booking/${res.data.id}`);
    });
  };

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  return (
    <AdminLayout>
      <div>
        <div className="field">
          <div className="is-flex is-align-items-flex-end is-justify-content-space-between">
            <div>
              <strong>Customer</strong>
            </div>
            <div>
              <button
                className="button is-primary is-fullwidth is-small"
                onClick={() => setAdd(true)}
              >
                ADD
              </button>
            </div>
          </div>

          <AddCustomer add={add} setAdd={setAdd} />

          <hr className="m-2" />

          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mb-0">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>

            <tbody>
              {customers.slice(0, 4).map((c) => {
                return (
                  <tr
                    key={c.id}
                    className={`pointer ${
                      c.id === customer.id ? "has-background-link-light" : ""
                    }`}
                    onClick={() => setCustomer(c)}
                  >
                    <td>{c.first_name}</td>
                    <td>{c.last_name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone_number}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            className="button is-link is-inverted is-fullwidth is-small"
            onClick={() => setModal(true)}
          >
            <strong>
              <FontAwesomeIcon icon={faAnglesDown} className="mx-1" />
              See More
            </strong>
          </button>

          <CustomerList
            modal={modal}
            setModal={setModal}
            customers={customers}
            setCustomer={setCustomer}
            customer={customer}
          />
        </div>

        <div className="columns is-variable is-2">
          <div className="column is-three-fifths">
            {customer != 0 && (
              <BookingHeader
                options={options}
                setDate={setDate}
                convertDate={convertDate}
                setGuest={setGuest}
              />
            )}

            {val.length != 0 ? (
              <div>
                <BookingTabs tab={tab} setTab={setTab} />
                {tab ? (
                  <BookingMeetingRooms
                    result={result}
                    setResult={setResult}
                    pack={pack}
                    setPack={setPack}
                    roomType={roomType}
                    setRoomType={setRoomType}
                    guest={guest}
                  />
                ) : (
                  <BookingRooms
                    pack={pack}
                    setPack={setPack}
                    roomType={roomType}
                    setRoomType={setRoomType}
                    setResult={setResult}
                    result={result}
                    guest={guest}
                  />
                )}
              </div>
            ) : (
              <>
                <div className="notification has-text-centered">
                  Please complete the information.
                </div>
              </>
            )}
          </div>

          <div className="column">
            <BookingSummary
              customer={customer}
              val={val}
              result={result}
              confirmSubmit={confirmSubmit}
              setButget={setButget}
              guest={guest}
              totalPrice={totalPrice}
              fndiffDay={fndiffDay}
            >
              {result.length != 0 ? (
                <OrderCard
                  setShow={setShow}
                  result={result}
                  setResult={setResult}
                  roomType={roomType}
                  setRoomType={setRoomType}
                  pack={pack}
                  equipment={equipment}
                  setEquipment={setEquipment}
                  service={service}
                  setService={setService}
                />
              ) : roomType.length != 0 ? (
                <OrderCard
                  setShow={setShow}
                  result={result}
                  setResult={setResult}
                  roomType={roomType}
                  setRoomType={setRoomType}
                  setPack={setPack}
                />
              ) : (
                <>
                  <div className="notification has-text-centered">
                    No Reservations
                  </div>
                </>
              )}

              <hr className="my-2" />
            </BookingSummary>
          </div>

          <DetailModal detail={detail} setDetail={setDetail} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Booking;

const BookingHeader = ({ options, setDate, convertDate, setGuest }) => {
  return (
    <div className="box">
      <div className="control">
        <div className="field">
          <label className="label">Guest</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="0"
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Check In - Check Out</label>
          <div className="control">
            <Flatpickr
              options={options}
              placeholder="Please select Check In to Check Out"
              onChange={(value) => setDate(value)}
            />
          </div>
        </div>

        <div className="field is-flex is-justify-content-flex-end">
          <button
            type="button"
            className="button is-primary"
            onClick={() => convertDate()}
          >
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingTabs = ({ tab, setTab }) => {
  return (
    <div className="tabs is-toggle is-fullwidth">
      <ul>
        <li className={tab ? "is-active" : ""} onClick={() => setTab(true)}>
          <a>Meeting Rooms</a>
        </li>
        <li
          className={tab === false ? "is-active" : ""}
          onClick={() => setTab(false)}
        >
          <a>Rooms</a>
        </li>
      </ul>
    </div>
  );
};

const BookingMeetingRooms = ({
  result,
  setResult,
  pack,
  setPack,
  roomType,
  setRoomType,
  guest,
}) => {
  const [meetingRooms, setMeetingRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/meeting_rooms`)
      .then((res) => setMeetingRooms(res.data));
  }, []);

  const btnDisable = (val) => {
    const r = result.filter((v) => v.id === val.id);

    if (r.length > 0) {
      return true;
    }
    return false;
  };

  const btnDisablePack = (val) => {
    const r = pack.filter((v) => v.id === val.id);

    if (result.length <= 0 || roomType.length <= 0) {
      return false;
    }

    if (r.length > 0) {
      return true;
    }

    return false;
  };

  const findPackage = (p) => {
    axios.get(`http://localhost:4000/packages/${p.id}`).then((res) => {
      res.data.meeting_rooms.equipment = [];
      res.data.meeting_rooms.service = [];
      setResult(res.data.meeting_rooms);
      setPack([res.data]);
      setRoomType(res.data.roomtypes);
    });
  };

  return (
    <div className="container">
      {meetingRooms.length > 0 ? (
        <>
          {meetingRooms
            .filter((m) => m.people >= guest)
            .map((m) => {
              return (
                <div className="card mb-3" key={m.id}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img
                            src="https://bulma.io/images/placeholders/128x128.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>

                      <div className="media-content">
                        <div className="is-flex is-align-items-center is-justify-content-flex-start mb-1">
                          <div className="title m-0 is-5">{m.name}</div>
                        </div>

                        <p className="subtitle is-6 has-text-grey mb-2">
                          Suport <u>{m.people}</u> guest, <u>{m.table}</u> table
                        </p>
                        <p>
                          Spacious rooms (32sqm) with panoramic city views,
                          king-sized bed or convert to twin beds.
                        </p>

                        <u>
                          <a className="pointer">detail</a>
                        </u>
                      </div>
                    </div>

                    <hr />

                    <div className="content columns">
                      <div className="column is-three-quarters">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                      </div>
                      <div className="column pr-5">
                        <div className="has-text-right mb-2">{m.price} THB</div>
                        <button
                          type="button"
                          className={`button is-primary is-fullwidth ${
                            btnDisable(m) ? "is-static" : ""
                          }`}
                          onClick={() => {
                            m.equipment = [];
                            m.service = [];
                            setResult([...result, m]);
                          }}
                        >
                          ADD
                        </button>
                      </div>
                    </div>

                    {m.packages.length != 0 && (
                      <>
                        <div className="title is-5 m-0">Packages</div>
                        <hr className="mt-2" />
                      </>
                    )}

                    {m.packages.map((p) => {
                      return (
                        <div key={p.id}>
                          <div className="content columns">
                            <div className="column is-three-quarters">
                              <div className="title is-6 mb-2">{p.name}</div>
                              <div className="mb-2">
                                Start: {p.start} - Stop: {p.stop}
                              </div>
                              <u>
                                <a className="pointer">detail</a>
                              </u>
                            </div>
                            <div className="column pr-5">
                              <div className="has-text-right">12,000 THB</div>
                              <div className="has-text-right mb-2 has-text-grey">
                                <strike>15,000 THB</strike>
                              </div>
                              <button
                                type="button"
                                className={`button is-primary is-fullwidth ${
                                  btnDisablePack(p) ? "is-static" : ""
                                }`}
                                onClick={() => findPackage(p)}
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          <div className="notification is-warning is-light has-text-centered">
            Loading...
          </div>
        </>
      )}
    </div>
  );
};

const BookingRooms = ({
  pack,
  setPack,
  roomType,
  setRoomType,
  setResult,
  result,
  guest,
}) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/roomtypes`)
      .then((res) => setRooms(res.data));
  }, []);

  const findPackage = (p) => {
    axios.get(`http://localhost:4000/packages/${p.id}`).then((res) => {
      setResult(res.data.meeting_rooms);
      setPack([res.data]);
      setRoomType(res.data.roomtypes);
    });
  };

  const btnDisable = (val) => {
    const r = roomType.filter((v) => v.id === val.id);

    if (r.length > 0) {
      return true;
    }
    return false;
  };

  const btnDisablePack = (val) => {
    const r = pack.filter((v) => v.id === val.id);

    if (result.length <= 0 || roomType.length <= 0) {
      return false;
    }

    if (r.length > 0) {
      return true;
    }

    return false;
  };

  return (
    <div className="container">
      {rooms.length > 0 ? (
        <>
          {rooms.map((m) => {
            return (
              <div className="card mb-3" key={m.id}>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img
                          src="https://bulma.io/images/placeholders/128x128.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>

                    <div className="media-content">
                      <div className="is-flex is-align-items-center is-justify-content-space-between mb-1">
                        <div className="title m-0 is-5">{m.name}</div>
                        <div className="has-text-success title m-0 is-5">
                          10 Available
                        </div>
                      </div>

                      <p className="subtitle is-6 has-text-grey mb-2">
                        Suport <u>2</u> guest
                      </p>
                      <p>
                        Spacious rooms (32sqm) with panoramic city views,
                        king-sized bed or convert to twin beds.
                      </p>

                      <u>
                        <a className="pointer">detail</a>
                      </u>
                    </div>
                  </div>

                  <hr />

                  <div className="content columns">
                    <div className="column is-three-quarters">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </div>
                    <div className="column pr-5">
                      <div className="has-text-right mb-2">0 THB</div>
                      <button
                        type="button"
                        className={`button is-primary is-fullwidth ${
                          btnDisable(m) ? "is-static" : ""
                        }`}
                        onClick={() => setRoomType([...roomType, m])}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="title is-5 m-0">Packages</div>
                  <hr className="mt-2" />

                  {m.packages.map((p) => {
                    return (
                      <div key={p.id}>
                        <div className="content columns">
                          <div className="column is-three-quarters">
                            <div className="title is-6 mb-2">{p.name}</div>
                            <div className="mb-2">
                              Start: {p.start} - Stop: {p.stop}
                            </div>
                            <u>
                              <a className="pointer">detail</a>
                            </u>
                          </div>
                          <div className="column pr-5">
                            <div className="has-text-right">12,000 THB</div>
                            <div className="has-text-right mb-2 has-text-grey">
                              <strike>15,000 THB</strike>
                            </div>
                            <button
                              type="button"
                              className={`button is-primary is-fullwidth ${
                                btnDisablePack(p) ? "is-static" : ""
                              }`}
                              onClick={() => findPackage(p)}
                            >
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div className="notification is-warning is-light has-text-centered">
            Loading...
          </div>
        </>
      )}
    </div>
  );
};

const BookingSummary = ({
  children,
  customer,
  val,
  result,
  confirmSubmit,
  setButget,
  guest,
  totalPrice,
  fndiffDay,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="box">
      <div className="title is-4 mb-3">
        <strong>
          <span className="has-text-danger">{customer.first_name}</span> Stay
        </strong>
      </div>
      <hr className="my-2" />
      <div className="content block is-outlined">
        <div className="columns">
          <div className="column pt-2 pb-1">
            <strong>Check-in</strong>
          </div>
          <div className="column pt-2 pb-1">
            <strong>Check-out</strong>
          </div>
        </div>
        <div className="columns">
          <div className="column pt-0">After {val.time_checkin}</div>
          <div className="column pt-0">Before {val.time_checkout}</div>
        </div>
        <div className="column p-0">
          {val.day_checkin} - {val.day_checkout}
        </div>
        <div className="column p-0">{fndiffDay() || 0} Day</div>
        <div className="column p-0">{guest} Guest</div>
      </div>
      <hr className="my-2" />

      <div>{children}</div>

      <div className="columns m-0">
        <div className="column is-size-4">
          <strong>Total:</strong>
        </div>
        <div className="column has-text-right is-size-4">
          <strong>{totalPrice()} THB</strong>
        </div>
      </div>

      {result.length > 0 && (
        <>
          {show ? (
            <>
              <hr className="m-0" />

              <div className="columns p-3">
                <div className="column">Butget:</div>
                <div className="column has-text-right">
                  <input
                    className="input is-small"
                    type="number"
                    placeholder="0 THB"
                    onChange={(e) => setButget(e.target.value)}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="is-flex is-justify-content-flex-end">
              <button
                className="button is-small is-light is-fullwidth mb-3"
                type="button"
                onClick={() => setShow(true)}
              >
                Bargain
              </button>
            </div>
          )}

          <button
            className="button is-success is-fullwidth"
            type="button"
            onClick={confirmSubmit}
          >
            Confirm
          </button>
        </>
      )}
    </div>
  );
};

const DetailModal = ({ detail, setDetail }) => {
  return (
    <>
      <div className={`modal ${detail ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setDetail(false)}
        ></div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setDetail(false)}
        ></button>
        <div className="modal-card">
          <header className="modal-card-head"></header>
          <section className=" modal-card-body">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://media.istockphoto.com/photos/conference-room-with-a-long-table-and-lots-of-chairs-picture-id98395721?k=20&m=98395721&s=612x612&w=0&h=aLPhhimrM4OYCsoFiK2EbMQqgKvNVSkPBl1M9Od0BYc="
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-danger is-fullwidth"
              onClick={() => setDetail(false)}
            >
              CANCEL
            </button>
            <button className="button is-primary is-fullwidth">ADD</button>
          </footer>
        </div>
      </div>
    </>
  );
};

const BookingEquipments = ({ eq, result, setResult }) => {
  const [equipments, setEquipments] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/equipments`)
      .then((res) => setEquipments(res.data));
  }, []);

  const addEquipment = (equi) => {
    equi.amount = amount;
    const eqfilter = eq.equipment.filter((q) => q.id != equi.id);
    eq.equipment = [...eqfilter, equi];
    const r = result.filter((q) => q.id != eq.id);
    setResult([...r, eq]);
  };

  return (
    <div>
      {equipments.map((v) => {
        return (
          <div key={v.id}>
            <div className="card mb-3">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image 64x64">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>

                  <div className="media-content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-2">
                      <div className="title m-0 is-4">
                        {v.name}
                        <div className="subtitle is-6">
                          <strong className="has-text-grey">
                            Price/item {v.price} THB
                          </strong>
                        </div>
                      </div>
                      <div className="title m-0 is-5">
                        <input
                          className="input"
                          type="number"
                          placeholder="amount: 0"
                          onChange={(e) => setAmount(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="is-flex is-align-items-flex-end is-justify-content-space-between">
                      <div>Equipments for Meeting Rooms</div>
                      <div>
                        <button
                          className="button is-primary is-fullwidth"
                          type="button"
                          onClick={() => addEquipment(v)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const BookingServices = ({ se, result, setResult }) => {
  const [services, setServices] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/services`)
      .then((res) => setServices(res.data));
  }, []);

  const addServices = (equi) => {
    equi.amount = amount;
    const eqfilter = se.service.filter((q) => q.id != equi.id);
    se.service = [...eqfilter, equi];
    const r = result.filter((q) => q.id != se.id);
    setResult([...r, se]);
  };

  return (
    <div>
      <button className="button is-link is-light" onClick={() => setShow(null)}>
        Back
      </button>
      <hr className="my-3" />

      {services.map((v) => {
        return (
          <div key={v.id}>
            <div className="card mb-3">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image 64x64">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>

                  <div className="media-content">
                    <div className="is-flex is-align-items-center is-justify-content-space-between mb-2">
                      <div className="title m-0 is-4">
                        {v.name}
                        <div className="subtitle is-6">
                          <strong className="has-text-grey">
                            Price/set {v.price} THB
                          </strong>
                        </div>
                      </div>
                      <div className="title m-0 is-5">
                        <input
                          className="input"
                          type="number"
                          placeholder="amount: 0"
                          onChange={(e) => setAmount(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="is-flex is-align-items-flex-end is-justify-content-space-between">
                      <div>Service for Meeting Rooms</div>
                      <div>
                        <button
                          className="button is-primary is-fullwidth"
                          type="button"
                          onClick={() => addServices(v)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const OrderCard = ({ result, setResult, roomType, setRoomType, setPack }) => {
  const [modal, setModal] = useState(null);
  const [eq, setEq] = useState([]);
  const [se, setSe] = useState([]);
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setResult(result.filter((item) => item.name !== name));
  };

  const handleRemoveRoom = (e) => {
    const name = e.target.getAttribute("name");
    setRoomType(roomType.filter((item) => item.name !== name));
  };

  const addE = (r) => {
    setModal("e");
    setEq(r);
  };

  const addS = (r) => {
    setModal("s");
    setSe(r);
  };

  return (
    <>
      {result.map((r, i) => {
        return (
          <nav className="panel is-success message" key={i}>
            <p className="panel-heading message-header">
              {r.name}
              <button
                type="button"
                className="delete"
                aria-label="delete"
                name={r.name}
                onClick={handleRemoveItem}
              ></button>
            </p>

            <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
              <div>Price</div>
              <strong>{r.price} THB/Day</strong>
            </div>

            {r.equipment.map((q) => {
              return (
                <div key={q.id} className="has-background-warning-light">
                  <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
                    <div>
                      {q.name} {q.amount} item
                    </div>
                    <div>
                      {"(" + parseInt(q.price) + "x" + parseInt(q.amount) + ")"}{" "}
                      <strong>
                        {parseInt(q.price) * parseInt(q.amount)} THB
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}

            {r.service.map((q) => {
              return (
                <div key={q.id} className="has-background-danger-light">
                  <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
                    <div>
                      {q.name} {q.amount} item
                    </div>
                    <div>
                      {"(" + parseInt(q.price) + "x" + parseInt(q.amount) + ")"}{" "}
                      <strong>
                        {parseInt(q.price) * parseInt(q.amount)} THB
                      </strong>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="panel-block">
              <button
                type="button"
                className="button is-link is- is-fullwidth mr-1"
                onClick={() => addE(r)}
              >
                Add Equipments
              </button>
              <button
                type="button"
                className="button is-link is-fullwidth ml-1"
                onClick={() => addS(r)}
              >
                Add Services
              </button>
            </div>
          </nav>
        );
      })}

      {roomType !== undefined ? (
        <>
          {roomType.map((r, i) => {
            return (
              <nav className="panel is-warning message" key={i}>
                <p className="panel-heading message-header">
                  {r.name}
                  <button
                    type="button"
                    className="delete"
                    aria-label="delete"
                    name={r.name}
                    onClick={handleRemoveRoom}
                  ></button>
                </p>
                <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
                  <div>Price</div>
                  <div>{r.price} THB/Day</div>
                </div>

                <div className="panel-block">
                  <button
                    type="button"
                    className="button is-link is-fullwidth ml-1"
                  >
                    Add-on Services
                  </button>
                </div>
              </nav>
            );
          })}
        </>
      ) : (
        <></>
      )}

      <div
        id="modal-js-example"
        className={`modal ${modal == "e" && "is-active"}`}
      >
        <div className="modal-background"></div>

        <div className="modal-content">
          <div className="box">
            <BookingEquipments eq={eq} result={result} setResult={setResult} />
          </div>
        </div>

        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModal(null)}
        ></button>
      </div>

      <div
        id="modal-js-example"
        className={`modal ${modal == "s" && "is-active"}`}
      >
        <div className="modal-background"></div>

        <div className="modal-content">
          <div className="box">
            <BookingServices se={se} result={result} setResult={setResult} />
          </div>
        </div>

        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setModal(null)}
        ></button>
      </div>
    </>
  );
};

const CustomerList = ({
  modal,
  setModal,
  customers,
  setCustomer,
  customer,
}) => {
  return (
    <div className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal(false)}
      ></button>
      <div className="modal-card card">
        <section className=" modal-card-body">
          {/* <p className="control has-icons-left">
            <input className="input block" type="text" placeholder="Search" />
            <span className="icon is-left">
              <FontAwesomeIcon icon={faSearch} className="mx-1" />
            </span>
          </p> */}
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mb-0">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((c) => {
                return (
                  <tr
                    key={c.id}
                    className={`pointer ${
                      c.id === customer.id ? "has-background-link-light" : ""
                    }`}
                    onClick={() => {
                      setModal(false);
                      setCustomer(c);
                    }}
                  >
                    <td>{c.first_name}</td>
                    <td>{c.last_name}</td>
                    <td>{c.email}</td>
                    <td>{c.phone_number}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

const AddCustomer = ({ add, setAdd }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/customers`, data)
      .then((res) => {
        setAdd(false);
        window.location.reload();
      });
    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`modal ${add && "is-active"}`}>
          <div className="modal-background" onClick={() => setAdd(false)}></div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setAdd(false)}
          ></button>
          <div className="modal-card card">
            <header className="modal-card-head title is-5 m-0">
              <FontAwesomeIcon icon={faUser} className="mx-2" />
              New Customer
            </header>
            <section className=" modal-card-body">
              <div className="columns">
                <div className="column">
                  First Name
                  <input
                    className="input"
                    type="text"
                    {...register("first_name")}
                  ></input>
                </div>
                <div className="column">
                  Last Name
                  <input
                    className="input"
                    type="text"
                    {...register("last_name")}
                  ></input>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  Email
                  <input
                    className="input"
                    type="email"
                    {...register("email")}
                  ></input>
                </div>
                <div className="column">
                  Phone Number
                  <input
                    className="input"
                    type="tel"
                    {...register("phone_number")}
                  ></input>
                </div>
              </div>
            </section>

            <footer className="modal-card-foot">
              <button
                className="button is-danger is-fullwidth"
                onClick={() => setAdd(false)}
              >
                CANCEL
              </button>
              <button className="button is-primary is-fullwidth" type="submit">
                ADD
              </button>
            </footer>
          </div>
        </div>
      </form>
    </>
  );
};
