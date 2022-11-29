import React from "react";
import "./App.css"
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Project from "./components/Project";
import LogoSlider from "./components/LogoSlider";
import Blog from "./components/Blog";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <AboutMe />
      <Resume />
      <Project />
      <LogoSlider />
      <Blog />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
