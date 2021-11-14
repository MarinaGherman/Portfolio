import React from 'react';
import s from './Projects.module.css'
import Project from "./Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.titleBlock}>
                <h2>My Projects</h2>
            </div>
            <div className={s.projectComponents}>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
};

export default Projects;