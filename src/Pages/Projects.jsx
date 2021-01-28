import React, { useState } from "react";
import cat from "../img/cat.png";

import charity from "../img/charity_bay.png";
import nc_student from "../img/nc_student.png";
import student from "../img/student.png";
import weather from "../img/weather.png";
const Projects = () => {
  const [bool, setBool] = useState(false);
  const foucsHandle = () => {
    setBool(true);
  };
  return (
    <main className="projects">
      <h1>PROJECTS</h1>
      <div className="project__wrapper">
        <div className="project">
          <img src={charity} alt="no image"></img>
          <div className="project__text">
            <h4>Charity Bay</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp. i
              contribute both in front-end and back-end.Tech we used like below.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Matrial UI</li>
              <li>Styled Component</li>
              <li>Express</li>
              <li>POSTgreql</li>
              <li>Jest</li>
              <li>Amazon aws</li>
              <li>Firebase</li>
            </ul>
            <div>
              <i class="fab fa-github"></i>
              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={nc_student} alt="no image"></img>
          <div className="project__text">
            <h4>NC Student</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Jest</li>
              <li>Express</li>
              <li>POSTgreql</li>
              <li>Matrial UI</li>
              <li></li>
            </ul>
            <div>
              <i class="fab fa-github"></i>

              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={student} alt="no image"></img>
          <div className="project__text">
            <h4>Student Tracker</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React Hook</li>
              <li>CSS</li>
              <li>React Router</li>
              <li>Sass</li>
            </ul>
            <div>
              <i class="fab fa-github" ></i>
              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={weather} alt="no image"></img>
          <div className="project__text">
            <h4>Weather App</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Axios</li>
              <li>Open Weather API</li>
            </ul>
            <div>
              <i class="fab fa-github"></i>

              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={cat} alt="no image"></img>
          <div className="project__text">
            <h4>Charity Bay</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>React Router</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <div>
              <i class="fab fa-github"></i>

              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
