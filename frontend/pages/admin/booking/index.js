import { useState } from "react";
import Flatpickr from "react-flatpickr";
import AdminLayout from "../../compoment/Layout/AdminLayout";

import "flatpickr/dist/themes/material_green.css";

const Booking = () => {
  const [tab, setTab] = useState(true);
  const [detail, setDetail] = useState(false);
  const options = {
    mode: "range",
    minDate: "today",
    // inline: true,
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
            <BookingTabs tab={tab} setTab={setTab} />
            {tab ? (
              <BookingMeetingRooms setDetail={setDetail} />
            ) : (
              <BookingRooms />
            )}
          </div>

          <div className="column">
            <BookingSummary />
          </div>

          <DetailModal detail={detail} setDetail={setDetail} />
        </form>
      </div>
    </AdminLayout>
  );
};

export default Booking;

const BookingHeader = ({ options }) => {
  return (
    <div className="box">
      <div className="control">
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
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div className="media-content">
              <div className="columns mb-0">
                <div className="title mb-0 is-4 column is-9">
                  Luna Meeting Room
                </div>
                <div className="column">10 available</div>
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
              <button className="button is-primary is-fullwidth">
                BOOK NOW
              </button>
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
              <button className="button is-primary is-fullwidth">
                BOOK NOW
              </button>
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
              <button className="button is-primary is-fullwidth">
                BOOK NOW
              </button>
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
              <button className="button is-primary is-fullwidth">
                BOOK NOW
              </button>
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

const BookingSummary = () => {
  return (
    <div className="box">
      <div className="title is-4 mb-3">
        <strong>Your Stay</strong>
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

      <div className="columns">
        <div className="column">Total:</div>
        <div className="column has-text-right">{"15,000"} THB</div>
      </div>
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
                    src="https://bulma.io/images/placeholders/1280x960.png"
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
              Cancel
            </button>
            <button className="button is-primary is-fullwidth">BOOK NOW</button>
          </footer>
        </div>
      </div>
    </>
  );
};
