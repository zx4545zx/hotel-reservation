import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div>
        <AdminNavbar />
        <main className="container py-6">{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;
