import React from "react";
import projectImg from "../assets/img/image.png";
import userImg from "../assets/img/profile.jpg";
import Banner from "./Banner";
import Layout from "./Layout";

function Hero() {
  return (
    // {/* <!-- hero --> */}
    <Layout>
      <section className="section1" id="hero">
        <div className="hero flex">
          <div className="left flex">
            <div className="name">Hi, I am sudip Adhikari</div>
            <div className="tag">Software Engineer</div>
            <div className="sub-tag">I love coding</div>
            <button>
              <a href={projectImg}>
                <i className="fa-solid fa-download"></i>Download CV
              </a>
            </button>
          </div>
          <div className="right flex">
            <img src={userImg} alt="user" />
          </div>
        </div>
      </section>
      <Banner />
    </Layout>
  );
}

export default Hero;
