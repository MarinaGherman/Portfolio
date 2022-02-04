import React from 'react';
import s from './Projects.module.css'
import Project from "./Project";

const lingvaninja  = "https://lingvoninja.com//images/meta/index.png";
const zodier = "https://zodier.io/static/meta-image.png";
const lingvaninjaText = "Lingvo Ninja — this is a set of short 10-minute lessons for quick and easy learning of English and English. The service works in Telegram, which allows you to learn English in the usual messenger without downloading individual applications.";
const lingvaninjaTitle = "Lingvo Ninja"
const zodierText = "Zodier simplifies this process and allows you to meet people and chat in popular instant messengers. This is a bot that determines the compatibility between people using a special algorithm and helps to find the most suitable person for friendship or relationship."
const zodierTitle = "Zodier"
const zodierLink = "https://zodier.io/en#contact"
const lingvoNinjaLink = "https://lingvoninja.com/"


const Projects = () => {
    return (
        <div className={s.projectsBlock} id="projects">
            <div className={s.titleBlock}>
                <h2>My Projects</h2>
            </div>
            <div className={s.projectComponents}>
                <Project image={lingvaninja}
                         title={lingvaninjaTitle}
                         text ={lingvaninjaText}
                         link={lingvoNinjaLink}
                />
                <Project image={zodier}
                         title={zodierTitle}
                         text ={zodierText}
                         link={zodierLink}
                />
            </div>
        </div>
    );
};

export default Projects;