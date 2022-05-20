import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

import AdminLayout from "../../compoment/Layout/AdminLayout";

const RoleAcsses = () => {
  const Router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!Router.isReady) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments`)
      .then((res) => setDepartments(res.data));

    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions`)
      .then((res) => setPositions(res.data));
  }, [Router.isReady]);

  return (
    <AdminLayout>
      <div className="container">
        <div className="is-flex is-justify-content-space-between">
          <Link href="/admin/role" passHref>
            <button className="button is-info">Back</button>
          </Link>
          <button className="button is-success">Save</button>
        </div>

        <hr className="mt-3" />
        <div className="columns">
          <div className="column">
            <DepartmentList departments={departments} />
          </div>

          <div className="column">
            <PositionList positions={positions} />
          </div>
        </div>

        <div>
          <AcssesList />
        </div>
      </div>
    </AdminLayout>
  );
};

export default RoleAcsses;

const DepartmentList = ({ departments }) => {
  return (
    <>
      <div>
        <div className="title is-4 m-0">Department</div>
        <hr />
        <div className="select is-fullwidth">
          <select>
            <option>Select Position</option>
            {departments.map((d) => {
              return <option key={d.id}>{d.name}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

const PositionList = ({ positions }) => {
  return (
    <>
      <div>
        <div className="title is-4 m-0">Position</div>
        <hr />
        <div className="select is-fullwidth">
          <select>
            <option>Select Position</option>
            {positions.map((p) => {
              return <option key={p.id}>{p.name}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

const AcssesList = () => {
  return (
    <>
      <div>
        <div className="title is-4 m-0">Acsses</div>
        <hr />
        <table className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr>*</abbr>
              </th>
              <th>Acsses</th>
            </tr>
          </thead>
          <tbody className="list-table">
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Reservation</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Quotation</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Customer</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Bill</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Meeting Room</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Meeting Room Equipment</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Meeting Room Service</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Room</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Bed Type</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Room Equipment</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Room Service</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Room Add-On Service</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Bill</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Bill</th>
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Bill</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
