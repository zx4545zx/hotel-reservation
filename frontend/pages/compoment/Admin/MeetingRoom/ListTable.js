import { useState } from "react";
import Image from "next/image";
import mockimg from "../../../public/cover.jpeg";
import axios from "axios";
import Modal from "./Modal";

const ListTable = ({ meetingroom }) => {
  const [item, setItem] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(false);

  const DeleteService = (id) => {
    axios.delete("http://localhost:4000/meeting_rooms/"+id).then(res => console.log('ok'))
  }

  return (
    <>
      <ImgModal modalImg={modalImg} setModalImg={setModalImg} />

      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>
              <abbr title="ID">ID</abbr>
            </th>
            <th className="has-text-centered">Image</th>
            <th>Name</th>
            <th>Price / THB</th>
            <th>People Number</th>
            <th>Tables Number</th>
            <th className="has-text-centered">Action</th>
          </tr>
        </thead>
        <tbody>
        {meetingroom.map((s) => {
          return (
          <tr key={s.id}>
            <th>{s.id}</th>
            <td className="has-text-centered">
              <button className="button is-dark" onClick={() => setModalImg(true)}>SHOW</button>
            </td>
            <td>{s.name}</td>
            <td>{s.price}</td>
            <td>{s.people}</td>
            <td>{s.table}</td>
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

const ImgModal = ({ modalImg, setModalImg }) => {
  return (
    <div id="modal-js-example" className={`modal ${modalImg && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalImg (false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <Image
          src={mockimg}
          alt="Picture of the author"
        />
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModalImg (false)}
      ></button>
    </div>
  );
};

export default ListTable;
