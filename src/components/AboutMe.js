import React from "react";
import projectImg from "../assets/img/image.png";
function AboutMe() {
  return (
    <div className="section5" id="about">
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <div className="left">
          <img src={projectImg} alt="user" />
        </div>
        <div className="right">
          <h2>Sudip Adhikari</h2>
          <p>
            <h2>Frontend Developer: </h2>A Frontend Developer crafts engaging
            user interfaces by coding with HTML, CSS, and JavaScript. They
            ensure websites and applications are visually appealing, responsive,
            and user-friendly. Their skills bridge design and functionality,
            creating seamless digital experiences.
            <h2>Electronics Engineer:</h2> An Electronics Engineer designs,
            tests, and manages electronic systems, from consumer gadgets to
            industrial equipment. They analyze, develop, and maintain electronic
            components, circuits, and systems, striving htmlFor efficiency,
            innovation, and reliability in an ever-evolving field.
            <h2>Network Engineer:</h2> Network Engineers design, implement, and
            maintain communication networks, both local and wide-area. They
            ensure data flows efficiently, securely, and reliably, configuring
            routers, switches, and firewalls. These professionals play a
            critical role in keeping organizations connected and their data
            secure.
          </p>
        </div>
        <div className="tag">
          <h2>Interest</h2>
          <div className="interests">
            <li>Football</li>
            <li>Cricket</li>
            <li>Coding</li>
            <li>Networking</li>
            <li>Music</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
