import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const BookingStatus = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Booking Status
      </div>

      <div className="field">
        <label className="label">First Name and Last Name</label>
        <div className="columns mt-2">
          <input
            className="input is-rounded column is-four-fifths"
            type="text"
            placeholder="First Name and Last Name"
          />
          <div className="column p-0 has-text-centered">
            <button
              className="button is-link is-rounded"
              onClick={() => setModal(true)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BookingStatus;
