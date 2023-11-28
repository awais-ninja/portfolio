"use client";

import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="nav-link dropdown-toggle"
        role="button"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleOpen}
      >
        Dropdown
      </button>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`.trim()}>
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </>
  );
};

const Dropdownnew = () => {
  const [notOpen, setNotOpen] = useState(true);
  const toggleReOpen = () => {
    return setNotOpen(!notOpen);
  };

  return (
    <>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className={`navbar-toggler ${notOpen} ?  "collapsed" : "" `.trim()}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={`${notOpen} ? "true" : "false"`.trim()}
          aria-label="Toggle navigation"
          onClick={toggleReOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={` navbar-collapse ${notOpen} ? " show" : "collapse"`.trim()}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <Dropdown />
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Dropdownnew />
      </nav>
    </main>
  );
}
