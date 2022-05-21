import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ bedtype }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/bedtypes/"+id).then(res => console.log('ok'))
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
          <th>Size / ft </th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
      {bedtype.map((b) => {
          return (
            <tr key={b.id}>
              <th>{b.id}</th>
              <td>{b.name}</td>
              <td>{b.size}</td>
          <td className="has-text-centered">
          <div className="buttons is-flex is-justify-content-center">
            <button className="button is-success is-rounded" onClick={() => {
                    setItem(b)
                    setModal(true);
              }}>Edit</button>
            <button className="button is-danger is-rounded" onClick={()=> DeleteService(b.id)}>Delete</button>
          </div>
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
