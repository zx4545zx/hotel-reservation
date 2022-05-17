const ListTable = () => {
  return (
    <table className="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>
            <abbr title="ID">ID</abbr>
          </th>
          <th>Name</th>
          <th>Price / THB</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>อาหารชุดกลาง</td>
          <td>3000</td>
          <td className="has-text-centered">
          <div className="buttons is-flex is-justify-content-center">
              <button class="button is-success is-rounded">Edit</button>
              <button class="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>อาหารชุดเล็ก</td>
          <td>1000</td>
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