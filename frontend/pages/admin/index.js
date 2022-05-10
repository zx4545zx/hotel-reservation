import AdminLayout from "../compoment/Layout/AdminLayout";
import useUser from "../../data/use-user";

const Reservations = () => {
  const { user, loading } = useUser();

  return (
    <AdminLayout>
      {loading != true && (
        <div>
          <div className="title mt-5">Reservations </div>
          <hr />
        </div>
      )}
    </AdminLayout>
  );
};

export default Reservations;
