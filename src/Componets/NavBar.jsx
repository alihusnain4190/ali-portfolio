import React from "react";
import { Link } from "@reach/router";
const NavBar = () => {
  return (
    <aside className="aside">
      <div className="aside__name">
        <h1 className="aside__h1">Ali Husnain</h1>

        <p className="aside__p">Full stack developer</p>
        <hr className="aside__name__line"></hr>
      </div>
      <div className="aside__list">
        <ul className="aside__ul">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="fas fa-home"></i>Home
            </li>
          </Link>

          <Link to="about" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="fas fa-id-card-alt"></i>about
            </li>
          </Link>
          <Link to="skills" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="far fa-chart-bar"></i>skills
            </li>
          </Link>
          <Link to="projects" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="far fa-file"></i>Project
            </li>
          </Link>
          <Link to="contact" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="far fa-address-card"></i>Contact
            </li>
          </Link>
          <Link to="resume" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="far fa-file"></i> Resume
            </li>
          </Link>
        </ul>
      </div>
      <div className="aside__social">
        <ul className="aside__ul">
          <li>
            <i class="fab fa-github"></i>
          </li>

          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;
