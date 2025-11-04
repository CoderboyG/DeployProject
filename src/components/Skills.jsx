import React from "react";

export default function Skills() {
    const skills = ["React", "JavaScript", "Node.js", "CSS", "HTML", "Git"];
    return (
        <div className="section">
            <h1>Skills</h1>
            <ul className="skills">
                {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
