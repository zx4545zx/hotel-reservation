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
          <td>โปรเจ็คเตอร์</td>
          <td>1000</td>
          <td className="has-text-centered">
            <button className="button is-info mx-3">View</button>
            <button className="button is-danger mx-3">Delete</button>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>ดอกไม้</td>
          <td>1000</td>
          <td className="has-text-centered">
            <button className="button is-info mx-3">View</button>
            <button className="button is-danger mx-3">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListTable;
