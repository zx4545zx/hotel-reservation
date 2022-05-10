import AdminNavbar from "./AdminNavbar";
import AdminSideBar from "./AdminSideBar";
import useUser from "../../../data/use-user";
import { useEffect } from "react";
import Router from "next/router";

const AdminLayout = ({ children }) => {
  const { user, loading, loggedOut } = useUser();

  useEffect(() => {
    if (loggedOut) {
      Router.replace("/admin/login");
    }
  }, [loggedOut]);
  if (loggedOut) return "redirecting...";

  return (
    <div>
      {loading != true && (
        <div>
          <AdminNavbar user={user} />
          <main className="container py-6">
            <div className="tile is-ancestor pt-5">
              <AdminSideBar />

              <div className="tile is-parent px-6">
                <div className="tile is-child block">{children}</div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
