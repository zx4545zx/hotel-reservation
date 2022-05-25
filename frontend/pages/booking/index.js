import Layout from "../compoment/Layout/Layout";
import { useState, useEffect } from "react";
import Flatpickr from "react-flatpickr";
import axios from "axios";

import "flatpickr/dist/themes/material_green.css";

const Booking = () => {
  const [date, setDate] = useState([]);
  const [guest, setGuest] = useState(0);
  const [val, setVal] = useState([]);
  const options = {
    mode: "range",
    minDate: "today",
    altInput: true,
    altInputClass: "input has-text-centered pointer",
    altFormat: "j F Y",
  };

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

    return sum;
  };

  const confirmSubmit = () => {
    console.log("test");
  };

  return (
    <Layout>
      <main className="py-5">
        <div className="columns">
          <div className="column">
            <div className="mb-3">
              <BookingHeader
                options={options}
                setDate={setDate}
                convertDate={convertDate}
                setGuest={setGuest}
              />
            </div>
            <div className="mb-3">
              <BookingSummary
                val={val}
                confirmSubmit={confirmSubmit}
                guest={guest}
                totalPrice={totalPrice}
                fndiffDay={fndiffDay}
              ></BookingSummary>
            </div>
          </div>
          <div className="column">
            <div className="mb-3">
              <BookingRooms />
            </div>
          </div>
        </div>
      </main>
    </Layout>
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

const BookingSummary = ({
  children,
  val,
  confirmSubmit,
  guest,
  totalPrice,
  fndiffDay,
}) => {
  return (
    <div className="box">
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

      <hr className="m-0" />

      <button
        className="button is-success is-fullwidth"
        type="button"
        onClick={confirmSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

const BookingRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/roomtypes`)
      .then((res) => setRooms(res.data));
  }, []);

  const btnDisable = (val) => {
    // const r = roomType.filter((v) => v.id === val.id);

    // if (r.length > 0) {
    //   return true;
    // }
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
          <div className="notification is-warning is-light has-text-centered">
            Loading...
          </div>
        </>
      )}
    </div>
  );
};
