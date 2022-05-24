import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const BookingStatus = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Booking Status
      </div>

      <div class="field">
        <label class="label">First Name and Last Name</label>
        <div class="columns mt-2">
          <input
            class="input is-rounded column is-four-fifths"
            type="text"
            placeholder="First Name and Last Name"
          />
          <div class="column p-0 has-text-centered">
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
