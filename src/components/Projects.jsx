import React from "react";

export default function Projects() {
    const projects = [
        { title: "Portfolio Website", desc: "A personal portfolio built with React." },
        { title: "E-Commerce App", desc: "Shopping cart with Context API and Reducers." },
        { title: "Recipe Book", desc: "Add, view, and delete recipes easily." }
    ];

    return (
        <div className="section">
            <h1>Projects</h1>
            <div className="grid">
                {projects.map((p, i) => (
                    <div key={i} className="card">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
