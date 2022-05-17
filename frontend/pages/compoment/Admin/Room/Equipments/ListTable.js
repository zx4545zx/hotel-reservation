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
            <td>โคมไฟ</td>
            <td>500</td>
            <td className="has-text-centered">
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-success is-rounded">Edit</button>
              <button className="button is-danger is-rounded">Delete</button>
            </div>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>ตู้เสื้อผ้า</td>
            <td>2000</td>
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
  