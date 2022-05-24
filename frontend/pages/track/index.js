import Layout from "../compoment/Layout/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Track = () => {
  const { register, handleSubmit } = useForm();
  const [reservations, setReservations] = useState([]);
  const [tracking, setTracking] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/reservations").then((res) => {
      console.log(res.data);
      setReservations(res.data);
    });
  }, []);

  const onSubmit = (data) => setTracking(data.tracking);

  return (
    <Layout>
      <main className="py-5">
        <section className="block card hero is-warning is-small">
          <div className="hero-body">
            <p className="title">Track Search</p>
            <p className="subtitle"></p>
          </div>
        </section>

        <div className="columns">
          <div className="column"></div>
          <div className="column is-two-thirds">
            <form
              className="field has-addons"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="control is-expanded">
                <div className="is-fullwidth">
                  <input className="input" {...register("tracking")} />
                </div>
              </div>
              <div className="control">
                <button type="submit" className="button is-primary">
                  Search
                </button>
              </div>
            </form>

            <hr />

            <div>
              {reservations
                .filter((r) => r.tracking === tracking)
                .map((r) => {
                  console.log(r);
                  return (
                    <div key={r.id} className="block box">
                      <div>{r.guest}</div>
                      <div>{r.check_in}</div>
                      <div>{r.check_out}</div>
                      <div>{r.tracking}</div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="column"></div>
        </div>
      </main>
    </Layout>
  );
};

export default Track;
