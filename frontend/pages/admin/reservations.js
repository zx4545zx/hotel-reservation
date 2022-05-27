import AdminLayout from "../compoment/Layout/AdminLayout";
import useUser from "../../libs/useUser";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Reservations = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/reservations").then((res) => {
      console.log(res.data);
      setReservations(res.data);
    });
  }, []);

  if (!user || user.isLoggedIn === false) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  if (!user.role.acess_reserv) {
    return (
      <AdminLayout>
        <div className="notification is-danger has-text-centered is-size-3">
          You are not allowed on this page.
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div>
        <section className="block card hero is-primary is-small">
          <div className="hero-body">
            <p className="title has-text-centered">Reservations</p>
            <p className="subtitle"></p>
          </div>
        </section>

        <hr />

        <div className="columns">
          <div className="column"></div>
          <div className="column is-half">
            {reservations.map((v) => {
              return (
                <div key={v.id} className="block pointer">
                  <Link href={`/admin/booking/${v.id}`} passHref>
                    <div className="card">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <p className="title is-4">
                              {v.customer.first_name} {v.customer.last_name}
                            </p>
                            <p className="subtitle is-6">
                              <div>
                                <div className="field is-grouped is-grouped-multiline">
                                  <div className="control">
                                    <div className="tags has-addons">
                                      <span className="tag is-dark">Q</span>
                                      <span className="tag is-primary">
                                        {v.queue}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="control">
                                    <div className="tags has-addons">
                                      <span className="tag is-dark">Guest</span>
                                      <span className="tag is-info">
                                        {v.guest}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="control">
                                    <div className="tags has-addons">
                                      <span className="tag is-success">
                                        {v.price}
                                      </span>
                                      <span className="tag is-dark">THB</span>
                                    </div>
                                  </div>

                                  {v.butget != 0 && (
                                    <div className="control">
                                      <div className="tags has-addons">
                                        <span className="tag is-dark">
                                          Butget
                                        </span>
                                        <span className="tag is-info">
                                          {v.butget}
                                        </span>
                                        <span className="tag is-dark">THB</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </p>
                            <p className="subtitle is-6">
                              <div>
                                <div className="field is-grouped is-grouped-multiline">
                                  <div className="control">
                                    <div className="tags has-addons">
                                      <span className="tag is-dark">
                                        Check In
                                      </span>
                                      <span className="tag is-success">
                                        {v.check_in}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="control">
                                    <div className="tags has-addons">
                                      <span className="tag is-dark">
                                        Check Out
                                      </span>
                                      <span className="tag is-danger">
                                        {v.check_out}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </p>
                          </div>
                        </div>

                        <div className="content"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="column"></div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reservations;
