import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import useUser from "../../../libs/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchway } from "@fortawesome/free-solid-svg-icons";

const AdminNavbar = () => {
  const { user } = useUser({ redirectTo: "/admin/login" });
  const [burger, setBurger] = useState(false);

  if (!user || user.isLoggedIn === false) {
    return <div>Loading...</div>;
  }

  const LogOut = () => {
    axios
      .post(`/api/logout`, user)
      .then((res) => {
        Router.replace("/admin/login");
      })
      .catch((e) => {
        console.log("error " + e);
      });
  };

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/admin">
          <a className="navbar-item has-text-primary is-size-3">
            <FontAwesomeIcon icon={faArchway} className="mx-3" />
            <div className="title has-text-primary">Hello! {user.fname}</div>
          </a>
        </Link>

        <a
          role="button"
          className={`navbar-burger ${burger && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setBurger(!burger)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {burger && (
        <div className="navbar-dropdown is-right">
          <a className="navbar-item" onClick={() => LogOut()}>
            Sign Out
          </a>
        </div>
      )}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-danger" onClick={() => LogOut()}>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
