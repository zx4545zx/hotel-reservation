import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ addon }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/addonservicerooms/" + id).then(res => console.log('ok'))
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
          {addon.map((a) => {
            return (
              <tr key={a.id}>
                <th>{a.id}</th>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td className="has-text-centered">
                  <div className="buttons is-flex is-justify-content-center">
                    <button className="button is-success is-rounded"
                      onClick={() => {
                        setItem(a)
                        setModal(true);
                      }}>Edit</button>
                    <button className="button is-danger is-rounded" onClick={() => DeleteService(a.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <Modal modal={modal} setModal={setModal} item={item} />
    </>
  );
};

export default ListTable;
