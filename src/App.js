import React from "react";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./style.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- header --> */}
        <Header />

        {/* <!-- hero --> */}
        <Hero />
        {/* <!-- banner --> */}
        <Banner />
        {/* <!-- skills --> */}
        <Skills />
        {/* projects --> */}
        <Projects />

        {/* <!-- About Me --> */}
        <AboutMe />
        {/* <!-- contact --> */}

        <Contacts />
        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
