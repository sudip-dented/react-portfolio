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
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/hero" element={<Hero />}></Route>
          <Route path="/skills" element={<Hero />}></Route>
          <Route path="/projects" element={<Skills />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
        </Routes>

        {/* <Header /> */}
        {/* <Hero /> */}
        {/* <Banner /> */}

        {/* <Skills /> */}

        {/* <Projects /> */}

        {/* <AboutMe /> */}

        {/* <Contacts /> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
