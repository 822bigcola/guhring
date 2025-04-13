import react from "react";
import "./navbarGuhring.css";
import { NavLink } from "react-router-dom";
//import { IoMdAddCircleOutline } from "react-icons/io";

class navbarGuhring extends react.Component {
  render() {
    return (
      <div
        className="container-fuild"
        style={{ position: "fixed", with: "100%", top: "0", zIndex: "1" }}
      >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <NavLink to="/">
            <img
              src="https://webshop.guehring.de/media/logo/websites/1/2000px-G_hring_Logo.svg.png"
              width="250px"
              alt="Guhring VN"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginLeft: "30px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sales">
                  Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/accountant">
                  Accountant
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hr">
                  HR
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default navbarGuhring;
