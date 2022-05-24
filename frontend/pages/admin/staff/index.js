import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "../../compoment/Layout/AdminLayout";
import useUser from "../../../libs/useUser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_cust) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs`)
      .then((res) => setStaffs(res.data));
  }, []);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Staff
      </div>

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button className="button is-success mb-1 js-modal-trigger">
          <Link href="/admin/staff/new" passHref>
            Add New Staff
          </Link>
        </button>
      </div>

      <hr className="mb-3 mt-2" />

      <ListTable staffs={staffs} />
    </AdminLayout>
  );
};

export default Staff;

const ListTable = ({ staffs }) => {
  const DelStaff = (id) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/${id}`)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Position</th>
            <th className="has-text-centered">Acess</th>
            <th className="has-text-centered">Status</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((val) => {
            return (
              <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.phone_number}</td>
                <td>{val.role_id === null ? "null" : val.department.name}</td>
                <td>{val.role_id === null ? "null" : val.position.name}</td>

                <td>
                  <div className="tags is-flex is-justify-content-center">
                    {val.role_id === null ? (
                      "null"
                    ) : (
                      <>
                        {val.role.acess_rerv && (
                          <span className="tag">Reservation</span>
                        )}
                        {val.role.acess_quot && (
                          <span className="tag">Quotation</span>
                        )}
                        {val.role.acess_cust && (
                          <span className="tag">Customer</span>
                        )}
                        {val.role.acess_meet && (
                          <span className="tag">MeetingRoom</span>
                        )}
                        {val.role.acess_meet_equi && (
                          <span className="tag">MeetingRoomEquipment</span>
                        )}
                        {val.role.acess_meet_ser && (
                          <span className="tag">MeetingRoomService</span>
                        )}
                        {val.role.acess_room && (
                          <span className="tag">Room</span>
                        )}
                        {val.role.acess_room_type && (
                          <span className="tag">RoomType</span>
                        )}
                        {val.role.acess_bed_type && (
                          <span className="tag">BedType</span>
                        )}
                        {val.role.acess_room_equi && (
                          <span className="tag">RoomEquipment</span>
                        )}
                        {val.role.acess_room_ser && (
                          <span className="tag">RoomService</span>
                        )}
                        {val.role.acess_room_add_on_ser && (
                          <span className="tag">RoomAdd-onService</span>
                        )}
                        {val.role.acess_package && (
                          <span className="tag">Package</span>
                        )}
                        {val.role.acess_staff && (
                          <span className="tag">Staff</span>
                        )}
                      </>
                    )}
                  </div>
                </td>

                {val.status === "online" ? (
                  <td className="has-text-centered">
                    <FontAwesomeIcon
                      icon={faCat}
                      className="has-text-primary is-size-3"
                    />
                  </td>
                ) : (
                  <td className="has-text-centered">
                    <FontAwesomeIcon
                      icon={faCat}
                      className="has-text-danger is-size-3"
                    />
                  </td>
                )}

                <td>
                  <div className="buttons is-flex is-justify-content-center">
                    <button className="button is-info mx-3">
                      <Link href={`/admin/staff/${val.id}`}>Edit</Link>
                    </button>
                    <button
                      className="button is-danger mx-3"
                      onClick={() => DelStaff(val.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
