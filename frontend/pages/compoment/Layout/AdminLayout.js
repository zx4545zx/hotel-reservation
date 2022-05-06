import AdminNavbar from "./AdminNavbar";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div>
        <AdminNavbar />
        <main className="container py-6">
          <div className="tile is-ancestor pt-5">
            <AdminSideBar />

            <div className="tile is-parent px-6">
              <div className="tile is-child block">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
