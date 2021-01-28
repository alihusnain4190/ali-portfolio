import React from "react";
import { Link } from "@reach/router";
import pdf from "../documents/ali.pdf";
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
          <Link to="contacts" style={{ textDecoration: "none" }}>
            <li className="aside__li">
              <i class="far fa-address-card"></i>Contact
            </li>
          </Link>
          {/* <Link to="resume" style={{ textDecoration: "none" }}> */}
          <li className="aside__li">
            <i class="far fa-file"></i>
            <a
              href={pdf}
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Resume
            </a>
          </li>
          {/* </Link> */}
        </ul>
      </div>
      <div className="aside__social">
        <ul className="aside__ul">
          <li>
            <a href="https://github.com/alihusnain4190">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/AliHusn89821590">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ali-husnain-94a13a1b8/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;
