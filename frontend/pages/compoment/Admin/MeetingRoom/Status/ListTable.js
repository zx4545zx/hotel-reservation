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
          <th className="has-text-centered">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>สงกรานต์</td>
          <td>10,000</td>
          <td>ว่าง</td>
        </tr>
        <tr>
          <th>2</th>
          <td>ปีใหม่</td>
          <td>12,000</td>
          <td>จองแล้ว</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListTable;
