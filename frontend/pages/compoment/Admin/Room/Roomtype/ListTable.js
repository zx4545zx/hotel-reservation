import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

const ListTable = ({ roomtype }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/roomtypes/"+id).then(res => console.log('ok'))
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
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
        {roomtype.map((r) => {
          return (
            <tr key={r.id}>
              <th>{r.id}</th>
              <td>{r.name}</td>
            <td className="has-text-centered">
            <div className="buttons is-flex is-justify-content-center">
              <button className="button is-success is-rounded" onClick={() => {
                    setItem(r)
                    setModal(true);
                  }}>Edit</button>
              <button className="button is-danger is-rounded" onClick={()=> DeleteService(r.id)}>Delete</button>
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
  