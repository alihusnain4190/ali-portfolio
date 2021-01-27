import React from "react";
import cat from "../img/cat.png";

import charity from "../img/charity_bay.png";
import nc_student from "../img/nc_student.png";
import student from "../img/student.png";
import weather from "../img/weather.png";
const Projects = () => {
  return (
    <main className="projects">
      <h1>PROJECTS</h1>
      <div className="project__wrapper">
        {/* <div className="project__charity">
          <img src={charity} alt="no image"></img>
          <h4>Charity Bay</h4>
          <p>
            It is a charity web based applcation where user can sell and buy
            items after login into website.Developed over two weeks with 4 team
            members. it was our final project in NorthCoder BootCamp
          </p>
          <ul className="project__list">
            <li>React</li>
            <li>CSS</li>
            <li>Jest</li>
            <li>Express</li>
            <li>POSTgreql</li>
            <li>Amazon aws</li>
            <li>Firebase</li>
          </ul>
        </div> */}
        <div className="project__charity">
          <img src={nc_student} alt="no image"></img>
          <div className="charity__text">
            <h4>Charity Bay</h4>
            <p>
              It is a charity web based applcation where user can sell and buy
              items after login into website.Developed over two weeks with 4
              team members. it was our final project in NorthCoder BootCamp.
            </p>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Jest</li>
              <li>Express</li>
              <li>POSTgreql</li>
              <li>Amazon aws</li>
              <li>Firebase</li>
            </ul>
            <div>
              <i class="fab fa-github"></i>
              {/* <p className="demo">Demo</p> */}
              <i class="fas fa-desktop"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
