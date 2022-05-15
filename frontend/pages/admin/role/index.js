import { useState } from "react";
import Link from "next/link";
import AdminLayout from "../../compoment/Layout/AdminLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const RoleAcsses = () => {
  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Role Acsses
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <Link href="/admin/role/new" passHref>
          <button className="button is-success mb-1 js-modal-trigger">
            Add
          </button>
        </Link>
      </div>

      <hr className="mb-3 mt-2" />

      <ListTable />
    </AdminLayout>
  );
};

export default RoleAcsses;

const ListTable = () => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>Department</th>
          <th>Position</th>
          <th className="has-text-centered">Acsses</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>การขาย</td>
          <td>หัวหน้า</td>
          <td>
            <div class="tags is-flex is-justify-content-center">
              <span class="tag">BookNow</span>
              <span class="tag">Reservation</span>
              <span class="tag">Quotation</span>
              <span class="tag">Customer</span>
              <span class="tag">Bill</span>
              <span class="tag">MeetingRoom</span>
              <span class="tag">MeetingRoomEquipment</span>
              <span class="tag">MeetingRoomService</span>
              <span class="tag">Room</span>
              <span class="tag">RoomEquipment</span>
              <span class="tag">RoomService</span>
              <span class="tag">Package</span>
              <span class="tag">RoleAcsses</span>
              <span class="tag">Department</span>
              <span class="tag">Position</span>
              <span class="tag">Staff</span>
            </div>
          </td>
          <td>
            <div class="field is-grouped">
              <p class="control">
                <button className="button is-info mx-3">Edit</button>
              </p>
              <p class="control">
                <button className="button is-danger mx-3">Delete</button>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
