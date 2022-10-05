import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark sticky-top bd-navbar trans"
      aria-label="Offcanvas navbar large"
    >
      <div className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
        <Link className="navbar-brand py-0 px-0" to="/">
          <img src="/cryptofreemium.png" width="40" alt="" />
        </Link>
        <Link className="navbar-brand" to="/">
          Crypto Freemium
        </Link>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header px-4 pb-0">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Crypto Freemium
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white border-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-4 pt-0 p-lg-0">
            <hr className="d-lg-none text-white-50" />
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li data-bs-dismiss="offcanvas">
                    <Link className="dropdown-item" to="/sources">
                      Sources List
                    </Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                    <Link className="dropdown-item" to="/publicvip">
                      Open Channels
                    </Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li data-bs-dismiss="offcanvas">
                    <Link className="dropdown-item" to="/donate">
                      Donate
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
