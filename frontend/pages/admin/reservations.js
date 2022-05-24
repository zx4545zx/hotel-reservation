import AdminLayout from "../compoment/Layout/AdminLayout";
import useUser from "../../libs/useUser";

const Reservations = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_reserv) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <div className="title mt-5">Reservations</div>
        <hr />
      </div>
    </AdminLayout>
  );
};

export default Reservations;
