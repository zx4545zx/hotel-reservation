const ListTable = () => {
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
        <tr>
          <th>1</th>
          <td>Single Bed</td>
          <td className="has-text-centered">
          <div className="buttons is-flex is-justify-content-center">
              <button class="button is-success is-rounded">Edit</button>
              <button class="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>King size</td>
          <td className="has-text-centered">
          <div className="buttons is-flex is-justify-content-center">
              <button class="button is-success is-rounded">Edit</button>
              <button class="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListTable;
