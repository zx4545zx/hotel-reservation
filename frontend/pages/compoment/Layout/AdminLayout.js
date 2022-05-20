import AdminNavbar from "./AdminNavbar";
import AdminSideBar from "./AdminSideBar";
import useUser from "../../../libs/useUser";

const AdminLayout = ({ children }) => {
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  return (
    <div>
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
    </div>
  );
};

export default AdminLayout;
