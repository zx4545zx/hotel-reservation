import AdminLayout from "../../compoment/Layout/AdminLayout";
import useUser from "../../../libs/useUser";

const Quotations = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_quot) {
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
      <div className="title m-3 has-text-centered notification is-light">
        Quotations
      </div>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th className="has-text-centered">List</th>
          </tr>
        </thead>
      </table>
    </AdminLayout>
  );
};

export default Quotations;
