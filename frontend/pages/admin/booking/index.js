import { useState } from "react";
import Flatpickr from "react-flatpickr";
import AdminLayout from "../../compoment/Layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "flatpickr/dist/themes/material_green.css";

const Booking = () => {
  const [tab, setTab] = useState(true);
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(null);
  const options = {
    mode: "range",
    minDate: "today",
    altInput: true,
    altInputClass: "input has-text-centered pointer",
    altFormat: "j F Y",
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminLayout>
      <div>
        <form
          className="columns is-variable is-2"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="column is-three-fifths">
            <BookingHeader options={options} />

            {show === "e" ? (
              <BookingEquipments setShow={setShow} />
            ) : show === "s" ? (
              <BookingServices setShow={setShow} />
            ) : (
              <div>
                <BookingTabs tab={tab} setTab={setTab} />
                {tab ? (
                  <BookingMeetingRooms setDetail={setDetail} />
                ) : (
                  <BookingRooms />
                )}
              </div>
            )}
          </div>

          <div className="column">
            <BookingSummary>
              <OrderCard setShow={setShow} />
              <hr className="my-2" />
            </BookingSummary>
          </div>

          <DetailModal detail={detail} setDetail={setDetail} />
        </form>
      </div>
    </AdminLayout>
  );
};

export default Booking;

const BookingHeader = ({ options }) => {
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <div className="box">
      <div className="control">
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
                <th>*</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Natto</td>
                <td>Freever</td>
                <td>test@mail.com</td>
                <td>0900000000</td>
              </tr>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Bunny</td>
                <td>Eng</td>
                <td>alf@test.com</td>
                <td>0949589304</td>
              </tr>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Name</td>
                <td>Last</td>
                <td>me@example.com</td>
                <td>0999567865</td>
              </tr>
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
        </div>

        <div className="field">
          <label className="label">Guest</label>
          <div className="control">
            <input className="input" type="number" placeholder="0" />
          </div>
        </div>

        <div className="field">
          <label className="label">Check In - Check Out</label>
          <div className="control">
            <Flatpickr
              options={options}
              placeholder="Please select Check In to Check Out"
            />
          </div>
        </div>

        <CustomerList modal={modal} setModal={setModal} />
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

const BookingMeetingRooms = ({ setDetail }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src="https://media.istockphoto.com/photos/conference-room-with-a-long-table-and-lots-of-chairs-picture-id98395721?k=20&m=98395721&s=612x612&w=0&h=aLPhhimrM4OYCsoFiK2EbMQqgKvNVSkPBl1M9Od0BYc="
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
                Spacious rooms (32sqm) with panoramic city views, king-sized bed
                or convert to twin beds.
              </p>

              <u>
                <a className="pointer" onClick={() => setDetail(true)}>
                  detail
                </a>
              </u>
            </div>
          </div>

          <hr />

          <div className="content columns">
            <div className="column is-three-quarters">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
            <div className="column pr-5">
              <div className="has-text-right mb-2">15,000 THB</div>
              <button className="button is-primary is-fullwidth">ADD</button>
            </div>
          </div>

          <div className="title is-5 m-0">Packages</div>
          <hr className="mt-2" />

          <div className="content columns">
            <div className="column is-three-quarters">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris...{" "}
              <u>
                <a className="pointer">detail</a>
              </u>
            </div>
            <div className="column pr-5">
              <div className="has-text-right">12,000 THB</div>
              <div className="has-text-right mb-2 has-text-grey">
                <strike>15,000 THB</strike>
              </div>
              <button className="button is-primary is-fullwidth">ADD</button>
            </div>
          </div>

          <hr className="m-2" />

          <div className="content columns">
            <div className="column is-three-quarters">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris...{" "}
              <u>
                <a className="pointer">detail</a>
              </u>
            </div>
            <div className="column pr-5">
              <div className="has-text-right">11,500 THB</div>
              <div className="has-text-right mb-2 has-text-grey">
                <strike>15,000 THB</strike>
              </div>
              <button className="button is-primary is-fullwidth">ADD</button>
            </div>
          </div>

          <hr className="m-2" />

          <div className="content columns">
            <div className="column is-three-quarters">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris...{" "}
              <u>
                <a className="pointer">detail</a>
              </u>
            </div>
            <div className="column pr-5">
              <div className="has-text-right">11,000 THB</div>
              <div className="has-text-right mb-2 has-text-grey">
                <strike>15,000 THB</strike>
              </div>
              <button className="button is-primary is-fullwidth">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingRooms = ({ setDetail }) => {
  return <div className="container"></div>;
};

const BookingSummary = ({ children }) => {
  return (
    <div className="box">
      <div className="title is-4 mb-3">
        <strong>Customer Stay</strong>
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
          <div className="column pt-0">After 3:00 PM</div>
          <div className="column pt-0">Before 12:00 PM</div>
        </div>
        <div className="column p-0">Fri, May 20, 2022 - Sat, May 21, 2022</div>
        <div className="column p-0">1 Guest</div>
      </div>
      <hr className="my-2" />

      <div>{children}</div>

      <div className="columns">
        <div className="column is-size-4">
          <strong>Total:</strong>
        </div>
        <div className="column has-text-right is-size-4">
          <strong>{"16,050"} THB</strong>
        </div>
      </div>
      <button className="button is-success is-fullwidth">Confirm</button>
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

const BookingEquipments = ({ setShow }) => {
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
                  <button className="button is-primary is-fullwidth">
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
                  <button className="button is-primary is-fullwidth">
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

const OrderCard = ({ setShow }) => {
  return (
    <>
      <nav className="panel is-info message">
        <p className="panel-heading message-header">
          Luna Meeting Room
          <button className="delete" aria-label="delete"></button>
        </p>
        <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
          <div>Nomal Package</div>
          <div>15,000 THB</div>
        </div>
        <div className="panel-block is-flex is-align-items-flex-start is-justify-content-space-between">
          <div>Taxes & Fees 7%</div>
          <div>1,050 THB</div>
        </div>
        <div className="panel-block">
          <button
            className="button is-link is- is-fullwidth mr-1"
            onClick={() => setShow("e")}
          >
            Add Equipments
          </button>
          <button
            className="button is-link is-fullwidth ml-1"
            onClick={() => setShow("s")}
          >
            Add Services
          </button>
        </div>
      </nav>
    </>
  );
};

const CustomerList = ({ modal, setModal }) => {
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
                <th>*</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Natto</td>
                <td>Freever</td>
                <td>test@mail.com</td>
                <td>0900000000</td>
              </tr>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Bunny</td>
                <td>Eng</td>
                <td>alf@test.com</td>
                <td>0949589304</td>
              </tr>
              <tr>
                <th>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                </th>
                <td>Name</td>
                <td>Last</td>
                <td>me@example.com</td>
                <td>0999567865</td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="modal-card-foot">
          <button
            className="button is-danger is-fullwidth"
            onClick={() => setModal(false)}
          >
            CANCEL
          </button>
          <button className="button is-primary is-fullwidth">CONFIRM</button>
        </footer>
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
