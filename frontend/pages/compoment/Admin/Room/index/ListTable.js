import axios from "axios";
import Detailfrom from "./DetailRoom"
import { useState } from "react";

const ListTable = ({ rooms }) => {
  const [detailfrom, setdetailfrom]= useState(false)
  const [room,setRoom] = useState(null);


  const deleteRoom=(id)=>{
    axios.delete("http://localhost:4000/rooms/"+id)
    .then(()=>{window.location.reload();})  
  }

  return (
    
    <table className="table is-bordered is-fullwidth">
      <thead><Detailfrom detailfrom ={detailfrom} setdetailfrom={setdetailfrom} room={room}/>
        <tr>
          <th>
            <abbr title="ID">No</abbr>
          </th>
          <th>Name</th>
          <th>Building</th>
          <th>Guest</th>
          <th>Price</th>
          <th className="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((s, i) => {
          return (
            <tr key={s.id}>
              <th>{i + 1}</th>
              <td>{s.name}</td>
              <th>{s.building}</th>
              <th>{s.guest}</th>
              <th>{s.price}</th>
              <td className="has-text-centered">
                <div className="buttons is-flex is-justify-content-center">
                  <button className="button is-success mx-3" 
                  onClick={() => {
                    setRoom(s)
                    setdetailfrom(true)}}>Detail</button>
                  {/* <button className="button is-info mx-3">Edit</button> */}
                  <button className="button is-danger mx-3" onClick={()=>deleteRoom(s.id)}>Delete</button>
                </div>
              </td>
            </tr>


          )
        })}





      </tbody>
    </table>
   
  );
};

export default ListTable;
