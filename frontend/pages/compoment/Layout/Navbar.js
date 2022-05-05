import { useState } from "react";
import Link from "next/link";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faArchway } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [modal, setModal] = useState("");

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-size-3 is-uppercase has-text-weight-bold is-family-code has-text-primary">
            <FontAwesomeIcon icon={faArchway} className="mx-2" />
          </a>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/" passHref>
            <a className="navbar-item">Home</a>
          </Link>

          <a className="navbar-item">Offer</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-light"
                onClick={() => setModal("is-active")}
              >
                Sign in
              </a>
              <a className="button is-primary">
                <strong>BOOK NOW</strong>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal modal={modal} setModal={setModal} />
    </nav>
  );
};

export default Navbar;
