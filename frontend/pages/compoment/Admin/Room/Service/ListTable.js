const ListTable = ({ servicerooms }) => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>Name</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        {servicerooms.map((data) => {
          return (
            <tr key={data.id}>
              <th>{data.id}</th>
              <td>{data.name}</td>
              <td className="has-text-centered">
                <div className="buttons is-flex is-justify-content-center">
                  <button className="button is-success is-rounded">Edit</button>
                  <button className="button is-danger is-rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListTable;
