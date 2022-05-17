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
            <div className="tags is-flex is-justify-content-center">
              <span className="tag">BookNow</span>
              <span className="tag">Reservation</span>
              <span className="tag">Quotation</span>
              <span className="tag">Customer</span>
              <span className="tag">Bill</span>
              <span className="tag">MeetingRoom</span>
              <span className="tag">MeetingRoomEquipment</span>
              <span className="tag">MeetingRoomService</span>
              <span className="tag">Room</span>
              <span className="tag">RoomEquipment</span>
              <span className="tag">RoomService</span>
              <span className="tag">Package</span>
              <span className="tag">RoleAcsses</span>
              <span className="tag">Department</span>
              <span className="tag">Position</span>
              <span className="tag">Staff</span>
            </div>
          </td>
          <td>
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-info mx-3">Edit</button>
              </p>
              <p className="control">
                <button className="button is-danger mx-3">Delete</button>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
