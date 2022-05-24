import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useUser from "../../../libs/useUser";

import AdminLayout from "../../compoment/Layout/AdminLayout";
import { staffForm } from "../../../libs/utils/staffForm";

const RoleAcsses = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const Router = useRouter();
  const { id } = Router.query;
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);
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
    if (!Router.isReady) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/departments`)
      .then((res) => setDepartments(res.data));

    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/positions`)
      .then((res) => setPositions(res.data));

    axios
      .get(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/${id}`)
      .then((res) => {
        if (res.data.role_id != null) {
          setValue("department_id", res.data.department.id);
          setValue("position_id", res.data.position.id);
          setValue("acess_reserv", res.data.role.acess_reserv);
          setValue("acess_quot", res.data.role.acess_quot);
          setValue("acess_cust", res.data.role.acess_cust);
          setValue("acess_meet", res.data.role.acess_meet);
          setValue("acess_meet_equi", res.data.role.acess_meet_equi);
          setValue("acess_meet_ser", res.data.role.acess_meet_ser);
          setValue("acess_room", res.data.role.acess_room);
          setValue("acess_room_type", res.data.role.acess_room_type);
          setValue("acess_bed_type", res.data.role.acess_bed_type);
          setValue("acess_room_equi", res.data.role.acess_room_equi);
          setValue("acess_room_ser", res.data.role.acess_room_ser);
          setValue(
            "acess_room_add_on_ser",
            res.data.role.acess_room_add_on_ser
          );
          setValue("acess_package", res.data.role.acess_package);
          setValue("acess_staff", res.data.role.acess_staff);
        }

        setValue("first_name", res.data.first_name);
        setValue("last_name", res.data.last_name);
        setValue("phone_number", res.data.phone_number);
        setValue("email", res.data.email);
        setValue("password", res.data.password);
      });
  }, [Router.isReady]);

  const onSubmit = (data) => {
    const body = staffForm(data);

    axios
      .patch(`${process.env.NEXT_PUBLIC_DORADORA_API_URL}/staffs/${id}`, body)
      .then((res) => {
        Router.replace("/admin/staff");
      });
  };

  return (
    <AdminLayout>
      <div className="container">
        <div className="is-flex is-justify-content-flex-start">
          <Link href="/admin/staff" passHref>
            <button className="button is-info">Back</button>
          </Link>
        </div>

        <hr className="mt-3" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="columns">
            <div className="column">
              <div className="is-flex is-justify-content-center">
                <div>
                  <label className="label">Department</label>

                  <div className="select mb-2 is-fullwidth">
                    <select {...register("department_id")}>
                      <option value="0">Select department</option>
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
                      <option value="0">Select position</option>
                      {positions.map((p) => {
                        return (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

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
                        <input
                          className="input"
                          type="email"
                          {...register("email")}
                        />
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

                  <button className="button is-success" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              <AcssesList register={register} />
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default RoleAcsses;

const AcssesList = ({ register }) => {
  return (
    <>
      <div>
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
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_reserv")}
                />
              </th>
              <th>Reservation</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_quot")}
                />
              </th>
              <th>Quotation</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_cust")}
                />
              </th>
              <th>Customer</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_meet")}
                />
              </th>
              <th>Meeting Room</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_meet_equi")}
                />
              </th>
              <th>Meeting Room Equipment</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_meet_ser")}
                />
              </th>
              <th>Meeting Room Service</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_room")}
                />
              </th>
              <th>Room</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_room_type")}
                />
              </th>
              <th>Room Type</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_bed_type")}
                />
              </th>
              <th>Bed Type</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_room_equi")}
                />
              </th>
              <th>Room Equipment</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_room_ser")}
                />
              </th>
              <th>Room Service</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_room_add_on_ser")}
                />
              </th>
              <th>Room Add-On Service</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_package")}
                />
              </th>
              <th>Package</th>
            </tr>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register("acess_staff")}
                />
              </th>
              <th>Staff</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
