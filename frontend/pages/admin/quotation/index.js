import AdminLayout from "../../compoment/Layout/AdminLayout";

const Quotations = () => {
  
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
