import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchway } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

const Navbar = () => {
  const [modal, setModal] = useState("");
  const [burger, setBurger] = useState(false);

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
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
        <div class="navbar-dropdown is-right">
          <Link href="/" passHref>
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/offer" passHref>
            <a className="navbar-item">Offer</a>
          </Link>
          <Link href="/about" passHref>
            <a className="navbar-item">About</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="navbar-item">Contact</a>
          </Link>
          <Link href="/issue" passHref>
            <a className="navbar-item">Report an issue</a>
          </Link>
        </div>
      )}

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/" passHref>
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/offer" passHref>
            <a className="navbar-item">Offer</a>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <Link href="/about" passHref>
                <a className="navbar-item">About</a>
              </Link>
              <Link href="/contact" passHref>
                <a className="navbar-item">Contact</a>
              </Link>
              <hr className="navbar-divider" />
              <Link href="/issue" passHref>
                <a className="navbar-item">Report an issue</a>
              </Link>
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
