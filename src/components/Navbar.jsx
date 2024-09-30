import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light lamp-effect">
      <div className="container-fluid">
        <span className="navbar-brand ps-4">
          <Link to={"/"} className="nav-link neons">
            Rimba Sahara
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center pe-5"
          id="navbarToggler"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active text-with-rgb" : ""
              }`}
            >
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active text-with-rgb" : ""
              }`}
            >
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/experience"
                  ? "active text-with-rgb"
                  : ""
              }`}
            >
              <Link to={"/experience"} className="nav-link">
                Experience
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/skills" ? "active text-with-rgb" : ""
              }`}
            >
              <Link to={"/skills"} className="nav-link">
                Skills
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/interest" ? "active text-with-rgb" : ""
              }`}
            >
              <Link to={"/interest"} className="nav-link">
                Interest
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/awards" ? "active text-with-rgb" : ""
              }`}
            >
              <Link to={"/awards"} className="nav-link">
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
