import React from "react";
import ali from "../img/ali.jpeg";
import { Link } from "@reach/router";
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <img className="landing__image" src={ali} alt="ali image" />
        <h1 className="h1">Hi! I'm Ali Husnain</h1>
        <p>I'm a junior web developer!</p>
        <div className="landing__social">
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
        <Link to="/about" className="btn btn__about">
          Learn more about me
        </Link>
      </div>
    </section>
  );
};

export default Landing;
