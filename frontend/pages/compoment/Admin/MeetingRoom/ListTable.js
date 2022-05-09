import { useState } from "react";
import Image from "next/image";
import mockimg from "../../../public/cover.jpeg";

const ListTable = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ImgModal modal={modal} setModal={setModal} />

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
          <tr>
            <th>1</th>
            <td className="has-text-centered">
              <button className="button is-dark" onClick={() => setModal(true)}>SHOW</button>
            </td>
            <td>Luna Meeting</td>
            <td>1000</td>
            <td>40</td>
            <td>10</td>
            <td className="has-text-centered">
              <button className="button is-info mx-3">View</button>
              <button className="button is-danger mx-3">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const ImgModal = ({ modal, setModal }) => {
  return (
    <div id="modal-js-example" className={`modal ${modal && "is-active"}`}>
      <div className="modal-background" onClick={() => setModal(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <Image
          src={mockimg}
          alt="Picture of the author"
        />
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal(false)}
      ></button>
    </div>
  );
};

export default ListTable;
