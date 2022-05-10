import Router from "next/router";

import AdminLayout from "../compoment/Layout/AdminLayout";
import useUser from "../../data/use-user";
import { logout } from "../../libs/auth";

const Reservations = () => {
  const { user, loading } = useUser();

  return (
    <AdminLayout>
      {loading != true && (
        <div>
          <div className="title mt-5">Reservations </div>
          <hr />
          <div>{user.email}</div>
          <button
            onClick={() => {
              logout();
              Router.replace("/admin/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </AdminLayout>
  );
};

export default Reservations;
