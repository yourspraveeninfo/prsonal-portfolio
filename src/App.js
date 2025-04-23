import "./App.css";
import React from "react";
import Navbar from "./Pages/Navbar";
import HeroSection from "./Pages/HeroSection";
import AboutMe from "./Pages/AboutMe";
import MyPortfolio from "./Pages/MyPortfolio";
import MySkills from "./Pages/MySkills";
import ContactMe from "./Pages/ContactMe";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <MyPortfolio/>
      <MySkills/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
