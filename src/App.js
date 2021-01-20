import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Social />
      <Projects />
    </>
  );
}

export default App;
