import React from "react";
import ali from "../img/ali.jpeg";
import { Link } from "@reach/router";
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__wrapper">
        <img className="landing__image" src={ali} alt="ali image" />
        <h1>Hy I am Ali husnain</h1>
        <p>
          I am junior web developer looking for new role i complete my bootcamp{" "}
        </p>
        <div className="landing__social">
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
        <Link to="/about" className="btn btn__about">
          Learn more about me
        </Link>
      </div>
    </section>
  );
};

export default Landing;
