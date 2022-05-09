import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchway } from "@fortawesome/free-solid-svg-icons";

const AdminNavbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/admin/reservation">
          <a className="navbar-item has-text-primary is-size-3">
            <FontAwesomeIcon icon={faArchway} className="mx-1" />
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
          <Link href="/admin" passHref>
            <a className="navbar-item">Sign Out</a>
          </Link>
        </div>
      )}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/admin" passHref>
                <a className="button is-danger">Sign Out</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
