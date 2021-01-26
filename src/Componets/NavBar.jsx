import React from "react";
import { Link } from "@reach/router";
const NavBar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <h1>Ali Husnain</h1>
        </li>
        <li>
          <p>Full stack developer</p>
        </li>
      </ul>
      <ul>
        <Link to="/">
          <li>
            <i class="fas fa-home"></i>Home
          </li>
        </Link>

        <Link to="about">
          <li>
            <i class="fas fa-id-card-alt"></i>about
          </li>
        </Link>
        <Link to="skill">
          <li>
            <i class="far fa-chart-bar"></i>skills
          </li>
        </Link>
        <Link to="project">
          <li>
            <i class="far fa-file"></i>Project
          </li>
        </Link>
        <Link to="contact">
          <li>
            <i class="far fa-address-card"></i>Contact
          </li>
        </Link>
        <Link to="resume">
          <li>
            <i class="far fa-file"></i> Resume
          </li>
        </Link>
      </ul>
      <ul>
        <li>Twitter</li>

        <li>Githu</li>
        <li>linkedIn</li>
      </ul>
    </aside>
  );
};

export default NavBar;
