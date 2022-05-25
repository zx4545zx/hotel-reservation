import { useForm } from 'react-hook-form';
import axios from "axios";

const Rooms = ({ modalR, setModalR, room, setListPackageRoom }) => {
  axios
    .get("http://localhost:4000/rooms")
    .then((res) => {
      for (const x of res.data) {
        for (const r of room) {
          if (r.id == x.roomtype_id && (r.price == undefined || x.price < r.price)) {
            r.price = x.price;
          }
        }
      }
    })
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const result = [];
    if (data.room) {
    for (const d of data.room) {
      for (const r of room) {
        if (r.id == d.toString()) {
          result.push(r);
        }
      }
    }
  }
    setListPackageRoom(result);
    setModalR(false)
  }
  return (
    <div id="modal-js-example" className={`modal ${modalR && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalR(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Rooms</label>

          {room.map((s) => {
            return (
              <tr key={s.id}>
                <nav className="level" >
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      disabled={s.price?false:true}
                      {...register("room")}
                      value={s.id}
                    />
                    {s.name}
                    <input disabled={s.price?false:true} class="level-item" type="number" onChange={event => s.value = event.target.value}></input>  {/* //TODO หาวิธีเชื่อม จำนวนกับ ไอดี ก่อนส่งกลับไปหน้า แพ็คเกจ  */}
                  </label>
                </nav>
              </tr>)
          })}

          <button type="submit" className="button is-success">
            Save
          </button>
        </form>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModalR(false)}
      ></button>
    </div>
  );
};

export default Rooms;
