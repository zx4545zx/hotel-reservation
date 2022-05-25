//import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ packages }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/packages/" + id).then(res => console.log('ok'))
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
            <th>Days</th>
            <th>Start</th>
            <th>Stop</th>
            <th>Price / THB</th>
            <th>Discount price / THB</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((p) => {
            return (
              <tr key={p.id}>
                <th>{p.id}</th>
                <td>{p.name}</td>
                <td>{p.days}</td>
                <td>{p.start}</td>
                <td>{p.stop}</td>
                <td>{p.price}</td>
                <td>{p.dis_price}</td>
                <td className="has-text-centered">
                  <button
                    className="button is-success mx-3"
                  //  onClick={() => DeleteService(p.id)}
                  >Detail
                  </button>
                  <button
                    className="button is-info mx-3"
                    onClick={() => {
                      setItem(p)
                      setModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className="button is-danger mx-3" onClick={() => DeleteService(p.id)}>Delete</button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <Modal modal={modal} setModal={setModal} item={item}/> */}
    </>
  );
};

export default ListTable;
