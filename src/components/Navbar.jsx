import React from "react";
import "./Navbar.css";

function Navbar({ toggleTheme, theme }) {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </nav>
    );
}
export default Navbar;
