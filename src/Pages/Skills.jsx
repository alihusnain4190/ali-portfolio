import React from "react";
import html from "../img/html.png";

import css from "../img/css.png";
import react from "../img/react.png";
import javascript from "../img/javascript.png";
import sass from "../img/sass.png";
import node from "../img/node.png";
import knex from "../img/knex.png";
import postgresql from "../img/postgresql.png";
import visualstudio from "../img/visualstudio.png";

import graph from "../img/graph.png";

const Skills = () => {
  return (
    <main className="skills">
      <h1 className="h1">SKILLS</h1>
      <div className="skill__frontend__wrapper">
        <h3>Frontend </h3>
        <hr></hr>
        <div className="skill__frontend">
          <div>
            <img src={html} alt="no image "></img>
            <p>HTML</p>
          </div>
          <div>
            <img src={css} alt="no image "></img>
            <p>CSS</p>
          </div>
          <div>
            <img src={sass} alt="no image "></img>
            <p>Sass</p>
          </div>
          <div>
            <img src={javascript} alt="no image "></img>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
      <div className="skill__backend__wrapper">
        <h3 className="skill__h3">Backend</h3>
        <hr></hr>
        <div className="skill__backend">
          <div>
            <img src={node} alt="no image "></img>
            <p>Node</p>
          </div>
          <div>
            <img src={postgresql} alt="no image "></img>
            <p>Postgreql</p>
          </div>
          <div>
            <img src={knex} alt="no image "></img>
            <p>Knex</p>
          </div>
          <div>
            <img src={graph} alt="no image "></img>
            <p>GraphQL</p>
          </div>
        </div>
        <div className="skill__backend__wrapper">
          <h3 className="skill__h3">Other</h3>
          <hr></hr>
          <div className="skill__backend">
            <div>
              <img src={visualstudio} alt="no image "></img>
              <p>VisualStudio</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
