import React from "react";
import projectImg from "../assets/img/image.png";
function Projects() {
  return (
    <section className="section4">
      <h2>My Recent Work</h2>
      <div className="project-container">
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>Calculator</p>
            <p>19 sept 2023</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>Not_To_Do_List</p>
            <p>17 oct 2023</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>Portfolio with React</p>
            <p>27 sept 2023</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>sass_Playground</p>
            <p>10 oct 2023</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>Parallex_website</p>
            <p>14 oct 2023</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImg} alt="" />
          </div>
          <div className="button">
            <div className="icons">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-react"></i>
            </div>
            <p>Blog</p>
            <p>08 sept 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
