import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const About = React.lazy(() => import("./components/About"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Resume = React.lazy(() => import("./components/Resume"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Suspense fallback={<p>Loading...</p>}>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
