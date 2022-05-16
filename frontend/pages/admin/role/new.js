import Link from "next/link";
import AdminLayout from "../../compoment/Layout/AdminLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const RoleAcsses = () => {
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
            <DepartmentList />
          </div>

          <div className="column">
            <PositionList />
          </div>

          <div className="column">
            <AcssesList />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RoleAcsses;

const DepartmentList = () => {
  return (
    <>
      <div>
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <div className="title is-4 m-0">Department</div>
          <button className="button is-success is-small">+</button>
        </div>
        <hr />
        <table className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr>*</abbr>
              </th>
              <th>
                <abbr>ID</abbr>
              </th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody className="list-table">
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <td>1</td>
              <td>Name</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const PositionList = () => {
  return (
    <>
      <div>
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <div className="title is-4 m-0">Position</div>
          <button className="button is-success is-small">+</button>
        </div>
        <hr />
        <table className="table is-bordered is-fullwidth ">
          <thead>
            <tr>
              <th>
                <abbr>*</abbr>
              </th>
              <th>
                <abbr>ID</abbr>
              </th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody className="list-table">
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <td>1</td>
              <td>Name</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const AcssesList = () => {
  return (
    <>
      <div>
        {/* <div className="is-flex is-justify-content-space-between is-align-items-center"> */}
        <div className="title is-4 m-0">Acsses</div>
        {/* <button className="button is-success is-small">+</button>
        </div> */}
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
