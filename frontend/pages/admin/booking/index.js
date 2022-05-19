import { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import { useForm } from "react-hook-form";
import axios from "axios";

import AdminLayout from "../../compoment/Layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "flatpickr/dist/themes/material_green.css";

const Booking = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [add, setAdd] = useState(false);
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(true);
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(null);

  const [customers, setCustomers] = useState([]);

  const [customer, setCustomer] = useState([]);
  const [date, setDate] = useState([]);
  const [guest, setGuest] = useState(0);
  const [butget, setButget] = useState(0);

  const [val, setVal] = useState([]);
  const [result, setResult] = useState([]);

  const options = {
    mode: "range",
    minDate: "today",
    altInput: true,
    altInputClass: "input has-text-centered pointer",
    altFormat: "j F Y",
  };

  useEffect(() => {
    setCustomers([
      {
        id: 1,
        first_name: "Natto",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 2,
        first_name: "Bunny",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 3,
        first_name: "Bunny3",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 4,
        first_name: "Bunny4",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 5,
        first_name: "Bunny5",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 6,
        first_name: "Bunny6",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 7,
        first_name: "Bunny7",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
      {
        id: 8,
        first_name: "Bunny8",
        last_name: "test23424",
        email: "test@mail.com",
        phone_number: "01222",
      },
    ]);
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const confirmSubmit = () => {
    console.log(customer);
    console.log(date);
    console.log(guest);
    console.log(result);
    console.log(butget);
  };

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
              {customers.slice(0, 5).map((c) => {
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

        <form className="columns is-variable is-2">
          <div className="column is-three-fifths">
            {customer != 0 && (
              <BookingHeader
                options={options}
                setDate={setDate}
                convertDate={convertDate}
                setGuest={setGuest}
              />
            )}

            {show === "e" ? (
              <BookingEquipments setShow={setShow} />
            ) : show === "s" ? (
              <BookingServices setShow={setShow} />
            ) : (
              <>
                {val.length != 0 ? (
                  <div>
                    <BookingTabs
                      tab={tab}
                      setTab={setTab}
                      register={register}
                    />
                    {tab ? (
                      <BookingMeetingRooms
                        result={result}
                        setResult={setResult}
                      />
                    ) : (
                      <BookingRooms register={register} />
                    )}
                  </div>
                ) : (
                  <>
                    <div className="notification has-text-centered">
                      Please complete the information.
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="column">
            <BookingSummary
              register={register}
              customer={customer}
              val={val}
              result={result}
              confirmSubmit={confirmSubmit}
              setButget={setButget}
            >
              {result.length != 0 ? (
                <OrderCard
                  setShow={setShow}
                  result={result}
                  setResult={setResult}
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

          <DetailModal
            detail={detail}
            setDetail={setDetail}
            register={register}
          />
        </form>
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

const BookingTabs = ({ tab, setTab, register }) => {
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

const BookingMeetingRooms = ({ result, setResult }) => {
  const [meetingRooms, setMeetingRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/meeting_rooms`)
      .then((res) => setMeetingRooms(res.data));
  }, []);

  return (
    <div className="container">
      {meetingRooms.length > 0 ? (
        <>
          {meetingRooms.map((m) => {
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
                      <div className="has-text-right mb-2">15,000 THB</div>
                      <button
                        type="button"
                        className="button is-primary is-fullwidth"
                        onClick={() => setResult([...result, m])}
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="title is-5 m-0">Packages</div>
                  <hr className="mt-2" />

                  <div className="content columns">
                    <div className="column is-three-quarters">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris...{" "}
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
                        className="button is-primary is-fullwidth"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div className="notification is-danger is-light has-text-centered">
            No Data
          </div>
        </>
      )}
    </div>
  );
};

const BookingRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/rooms`).then((res) => setRooms(res.data));
  }, []);

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
                        <div className="title m-0 is-5">Luna Meeting Room</div>
                        <div className="has-text-success title m-0 is-5">
                          10 Available
                        </div>
                      </div>

                      <p className="subtitle is-6 has-text-grey mb-2">
                        Suport <u>60</u> guest
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
                      <div className="has-text-right mb-2">15,000 THB</div>
                      <button
                        type="button"
                        className="button is-primary is-fullwidth"
                      >
                        ADD
                      </button>
                    </div>
                  </div>

                  <div className="title is-5 m-0">Packages</div>
                  <hr className="mt-2" />

                  <div className="content columns">
                    <div className="column is-three-quarters">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris...{" "}
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
                        className="button is-primary is-fullwidth"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <div className="notification is-danger is-light has-text-centered">
            No Data
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
        <div className="column p-0">{val.guest_number} Guest</div>
      </div>
      <hr className="my-2" />

      <div>{children}</div>

      <div className="columns m-0">
        <div className="column is-size-4">
          <strong>Total:</strong>
        </div>
        <div className="column has-text-right is-size-4">
          <strong>{"0"} THB</strong>
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

const DetailModal = ({ detail, setDetail, register }) => {
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

const BookingEquipments = ({ setShow }) => {
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/meeting_rooms`)
  //     .then((res) => console.log(res.data));
  // }, []);

  return (
    <div>
      <button className="button is-link is-light" onClick={() => setShow(null)}>
        Back
      </button>
      <hr className="my-3" />

      <div className="card">
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
                  Projector
                  <div className="subtitle is-6">
                    <strong className="has-text-grey">
                      Price/item 100 THB
                    </strong>
                  </div>
                </div>
                <div className="title m-0 is-5">
                  <input
                    className="input"
                    type="number"
                    placeholder="0"
                  ></input>
                </div>
              </div>
              <div className="is-flex is-align-items-flex-end is-justify-content-space-between">
                <div>Equipments for Meeting Rooms</div>
                <div>
                  <button
                    className="button is-primary is-fullwidth"
                    type="button"
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
};

const BookingServices = ({ setShow }) => {
  return (
    <div>
      <button className="button is-link is-light" onClick={() => setShow(null)}>
        Back
      </button>
      <hr className="my-3" />

      <div className="card">
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
                  Break Small set
                  <div className="subtitle is-6">
                    <strong className="has-text-grey">
                      Price/item 1,500 THB
                    </strong>
                  </div>
                </div>
                <div className="title m-0 is-5">
                  <input
                    className="input"
                    type="number"
                    placeholder="0"
                  ></input>
                </div>
              </div>
              <div className="is-flex is-align-items-flex-end is-justify-content-space-between">
                <div>Services for Meeting Rooms</div>
                <div>
                  <button
                    className="button is-primary is-fullwidth"
                    type="button"
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
};

const OrderCard = ({ setShow, result, setResult }) => {
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    setResult(result.filter((item) => item.name !== name));
  };

  return (
    <>
      {result.map((r, i) => {
        return (
          <nav className="panel is-info message" key={i}>
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
              <div>Nomal Package</div>
              <div>{r.price} THB</div>
            </div>
            <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
              <div>Taxes & Fees</div>
              <div>0 THB</div>
            </div>
            <div className="panel-block">
              <button
                type="button"
                className="button is-link is- is-fullwidth mr-1"
                onClick={() => setShow("e")}
              >
                Add Equipments
              </button>
              <button
                type="button"
                className="button is-link is-fullwidth ml-1"
                onClick={() => setShow("s")}
              >
                Add Services
              </button>
            </div>
          </nav>
        );
      })}
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
          <p className="control has-icons-left">
            <input className="input block" type="text" placeholder="Search" />
            <span className="icon is-left">
              <FontAwesomeIcon icon={faSearch} className="mx-1" />
            </span>
          </p>
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
  return (
    <>
      <from>
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
                  <input className="input" type="text"></input>
                </div>
                <div className="column">
                  Last Name
                  <input className="input" type="text"></input>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  Email
                  <input className="input" type="email"></input>
                </div>
                <div className="column">
                  Phone Number
                  <input className="input" type="tel"></input>
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
      </from>
    </>
  );
};
