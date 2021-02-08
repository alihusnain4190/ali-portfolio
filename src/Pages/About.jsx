import React from "react";

const About = () => {
  return (
    <main className="about">
      <div className="about__wrapper">
        <h1 className="h1"> About!</h1>
        <p className="about__p">
          After completing my degree in
          <span className="about__span"> Computer Science</span>. I did a six
          month internship in{" "}
          <span className="about__span">C# (unity-software)</span> in 2016.
          After this I had an opportunity to start working as a{" "}
          <span className="about__span">Software implemtation </span>engineer
          where I worked in the radiology and pathology domain. I used{" "}
          <span className="about__span"> oracle, pl/sql and java</span>. I
          enjoyed working with the clients where I worked in a team to implement
          Oracle System according to the client requirement. I also provided
          training about the software to the doctors and their teams. In March
          2018, I came to England, I have worked as customer asistant and as
          warehouse operative in music magpie always with the hope to restart my
          career in IT. At the start of 2020 I was able to make this happen, I
          started Bootcamp with
          <span className="about__span"> Northcoders</span> . I am looking
          forward to a career in web developer.
        </p>
        <div className="about__qoute__wrapper">
          <p className="about__qoute__p">
            “If you want to live a happy life, tie it to a goal, not to people
            or things.”– Albert Einstein
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
