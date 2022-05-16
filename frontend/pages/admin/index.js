import AdminLayout from "../compoment/Layout/AdminLayout";
import useUser from "../../libs/useUser";

const Reservations = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return <AdminLayout>Loading...</AdminLayout>;
  }

  return (
    <AdminLayout>
      <div>
        <div className="title mt-5">Reservations {user.email}</div>
        <hr />
      </div>
    </AdminLayout>
  );
};

export default Reservations;
