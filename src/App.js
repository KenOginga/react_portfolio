import React from "react";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Social />
      <Projects />
      <Resume />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
