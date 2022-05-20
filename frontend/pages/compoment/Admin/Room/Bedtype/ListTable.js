const ListTable = () => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>Name</th>
          <th>Size</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Single Bed</td>
          <th>3.5 ฟุต</th>
          <td className="has-text-centered">

            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-success is-rounded">Edit</button>
              <button className="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>King Size</td>
          <th>6 ฟุต</th>
          <td className="has-text-centered">
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-success is-rounded">Edit</button>
              <button className="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListTable;
