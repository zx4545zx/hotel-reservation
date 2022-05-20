import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ equipments }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/equipment/"+id).then(res => console.log('ok'))
  }

  return (
    <>
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
      {equipments.map((s) => {
        return (
          <tr key={s.id}>
              <th>{s.id}</th>
              <td>{s.name}</td>
              <td>{s.price}</td>
              <td className="has-text-centered">
                <button
                  className="button is-info mx-3"
                  onClick={() => {
                    setItem(s)
                    setModal(true);
                  }}
                >
                  Edit
                </button>
            <button className="button is-danger mx-3" onClick={()=> DeleteService(s.id)}>Delete</button>
          </td>
        </tr>
        );
      })}
      </tbody>
    </table>

    <Modal modal={modal} setModal={setModal} item={item}/>
    </>
    );
};

export default ListTable;
