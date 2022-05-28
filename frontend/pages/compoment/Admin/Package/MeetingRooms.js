import { useForm } from 'react-hook-form'
import axios from "axios";

const MeetingRooms = ({ modalMR, setModalMR, meetingroom, setList }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    const result = [];
    if (data.meetingroom) {
      for (const d of data.meetingroom) {
        for (const r of meetingroom) {
          if (r.id == d.toString()) {
            result.push(r);
          }
        }
      }
    }
    setList(result);
    setModalMR(false)
  }

  return (
    <div id="modal-js-example" className={`modal ${modalMR && "is-active"}`}>
      <div className="modal-background" onClick={() => setModalMR(false)}></div>

      <div className="modal-content is-flex is-justify-content-center">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <label>Meeting Rooms</label>

          {meetingroom.map((s) => {
            return (
              <div key={s.id}>
                <nav className="level">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      {...register("meetingroom")}
                      value={s.id}
                    />
                    {s.name}
                  </label>
                </nav>
              </div>
            )

          })}

          <nav className="level">
            <button type="submit" className="button is-success" >
              Save
            </button>
          </nav>
        </form>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModalMR(false)}
      ></button>
    </div>
  );
};

export default MeetingRooms;
