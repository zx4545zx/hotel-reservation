import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ addonservices }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);
  
  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/addonservices/"+id).then(res => console.log('ok'))
  }

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
          <td>เตียงเสริม</td>
          <td>700</td>
          <td className="has-text-centered">
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-success is-rounded">Edit</button>
              <button className="button is-danger is-rounded">Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>อาหารในเซ็ต/1ท่าน</td>
          <td>300</td>
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
