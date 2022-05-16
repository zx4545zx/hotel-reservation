import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import AdminLayout from "../compoment/Layout/AdminLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Staff = () => {
  const [modal, setModal] = useState(false);
  const [staffs, setStaffs] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs`)
      .then((res) => {
        setStaffs(res.data.staffs);
        setDepartments(res.data.departments);
        setPositions(res.data.positions);
      });
  }, [staffs]);

  return (
    <AdminLayout>
      <div className="title m-3 has-text-centered notification is-light">
        Staff
      </div>

      <Modal
        modal={modal}
        setModal={setModal}
        departments={departments}
        positions={positions}
      />

      <div className="is-flex is-justify-content-space-between is-align-items-flex-end">
        <h1 className="is-size-4">List</h1>
        <button
          className="button is-success mb-1 js-modal-trigger"
          onClick={() => setModal(true)}
        >
          Add New Staff
        </button>
      </div>

      <hr className="mb-3 mt-2" />

      <ListTable
        staffs={staffs}
        departments={departments}
        positions={positions}
        setModal={setModal}
      />
    </AdminLayout>
  );
};

export default Staff;

const Modal = ({
  modal,
  setModal,
  departments,
  positions,
  dep,
  pos,
  sta,
}) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    if (sta) {
      setValue("id", sta.id);
      setValue("department_id", dep.id);
      setValue("position_id", pos.id);
      setValue("first_name", sta.first_name);
      setValue("last_name", sta.last_name);
      setValue("phone_number", sta.phone_number);
      setValue("email", sta.email);
    }
    return;
  }, []);

  const onSubmit = (data) => {
    if (data.id != "") {
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/${data.id}`,
          data
        )
        .then((res) => setModal(false));

      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs`, data)
      .then((res) => setModal(false));

    return;
  };

  return (
    <div className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Department</label>

          <div className="select mb-2 is-fullwidth">
            <select {...register("department_id")}>
              <option>Select department</option>
              {departments.map((d) => {
                return (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                );
              })}
            </select>
          </div>

          <label className="label">Position</label>
          <div className="select mb-2 is-fullwidth">
            <select {...register("position_id")}>
              <option>Select position</option>
              {positions.map((p) => {
                return (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                );
              })}
            </select>
          </div>

          <input type="number" {...register("id")} hidden />

          <div className="is-flex is-justify-content-center ">
            <div className="field mr-1">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  {...register("first_name")}
                />
              </div>
            </div>
            <div className="field ml-1">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  {...register("last_name")}
                />
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-center ">
            <div className="field mr-1">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  {...register("phone_number")}
                />
              </div>
            </div>
            <div className="field ml-1">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" {...register("email")} />
              </div>
            </div>
          </div>

          <div className="is-flex is-justify-content-center ">
            <div className="field mr-1">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="field ml-1">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  {...register("confirm_password", {
                    validate: (value) => value === watch("password"),
                  })}
                />
              </div>
            </div>
          </div>

          <div className="field is-grouped">
            <p className="control">
              <button
                className="button is-danger"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </p>
            <p className="control">
              <button className="button is-success" type="submit">
                Save
              </button>
            </p>
          </div>
        </form>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal(false)}
      ></button>
    </div>
  );
};

const ListTable = ({ staffs, departments, positions }) => {
  const [modal, setModal] = useState(false);
  const [staff, setStaff] = useState([]);
  const [department, setDepartment] = useState([]);
  const [position, setPosition] = useState([]);

const OpenModal = (val, dep, pos) => {
  setModal(true)
  setStaff(val)
  setDepartment(dep)
  setPosition(pos)
}

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
            <th className="has-text-centered">Status</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((val) => {
            const dep = departments.find((v) => v.id === val.department_id);
            const pos = positions.find((v) => v.id === dep.position_id);

            return (
              <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.phone_number}</td>
                <td>{dep.name}</td>
                <td>{pos.name}</td>

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
                    <button
                      className="button is-info mx-3"
                      onClick={() => OpenModal(val, dep, pos)}
                    >
                      Edit
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

      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          departments={departments}
          positions={positions}
          dep={department}
          pos={position}
          sta={staff}
        />
      )}
    </>
  );
};
