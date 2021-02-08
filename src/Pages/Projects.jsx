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
              It is a charity web based applcation. After loggin into the
              website the seller can donate the item and the buyer can buy items
              and donate thier money to charity.I Developed this project in two
              weeks with 4 team members. It was my final project in BootCamp. I
              contributed in the front-end and back-end development.
            </p>
            <h4>Tech</h4>
            <ul className="project__list">
              <li>React</li>
              <li>CSS</li>
              <li>Matrial UI</li>
              <li>Styled Component</li>
              <li>Express</li>
              <li>POSTgreql</li>
              <li>Knex</li>
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
              It is a student news website, where students can read, sort
              articles by name or topic and write comments against the article.
              The admin can remove student comments.
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
              Student tracker website to record a students journey through the
              course. Where you can see details of current students, history of
              gradute students and also you can see students according to
              blocks.
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
              It is single page react app, where the user can see temperature
              and forcast details of current day for their city. I used Open
              weather api.
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
            <h4>CatWiki</h4>
            <p>
              It is a web based cats app. The user can the see most popular
              cats. This application/site was created as a submission to a
              <a href=""> DevChallenges </a> challenge. The challenge was to
              build an application to complete the given user stories.
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
