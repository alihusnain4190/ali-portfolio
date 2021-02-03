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
      <h1 className="h1">PROJECTS</h1>
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
              <a href="https://github.com/alihusnain4190/fe-charity-bay">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://charity-bay.netlify.app/">
                <i class="fas fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={nc_student} alt="no image"></img>
          <div className="project__text">
            <h4>NC Student</h4>
            <p>
              It is a student blog website where student can comment againts the
              articles.Admin write Articles, he can also delete and uppade their
              articles and comments.I write a code for backend and also front
              end.i used these tech list is below.
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
              <a href="https://github.com/alihusnain4190/nc_news">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://nc-student-news.netlify.app/">
                <i class="fas fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={student} alt="no image"></img>
          <div className="project__text">
            <h4>Student Tracker</h4>
            <p>
              Student tracker website to keep the record of students journey
              through the course. You can see details of all students, gradute
              student history and also you can see students according to blocks
              .i used these tech list is below
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React Hook</li>
              <li>CSS</li>
              <li>React Router</li>
              <li>Sass</li>
            </ul>
            <div>
              <a href="https://github.com/alihusnain4190/std_tracker">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://aliz-student.netlify.app/">
                <i class="fas fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={weather} alt="no image"></img>
          <div className="project__text">
            <h4>Weather App</h4>
            <p>
              weather app is react single page app. where user can find
              temperature and forcast details of current day after enter their
              city and he can also see the graph of temperature and wind of day.
              i used Open weather api .
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Axios</li>
              <li>Open Weather API</li>
              <li>React-charts-js </li>
            </ul>
            <div>
              <a href="https://github.com/alihusnain4190/fe-react-data-visualisation/tree/master/weather-app">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://aliz-weather-app.netlify.app/">
                <i class="fas fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={cat} alt="no image"></img>
          <div className="project__text">
            <h4>Charity Bay</h4>
            <p>
              It is a web based cats app.Where user can see most populer cats.
              This application/site was created as a submission to a
              <a href="">DevChallenges</a> challenge. The challenge was to build
              an application to complete the given user stories.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>React Router</li>
              <li>React Charts</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <div>
              <a href="https://github.com/alihusnain4190/catwiki">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://aliz-cat.netlify.app/">
                <i class="fas fa-desktop"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
