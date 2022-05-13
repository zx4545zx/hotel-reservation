import { useState } from "react";
import AdminLayout from "../../compoment/Layout/AdminLayout";

const BookingStatus = () => {
  return <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
      Booking Status
      </div>

      <div class="field">
        <label class="label">Last Name and Surname</label>
        <div class="control">
          <input class="input is-rounded" type="text" placeholder="Last Name" />
        </div>
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <button
          className="button is-success mb-1 js-modal-trigger"
          data-target="modal-js-example"
          onClick={() => setModal(true)}>
          Search
        </button>
      </div>
      
  </AdminLayout>;
};

export default BookingStatus;
