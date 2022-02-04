import React from 'react';
import s from './Project.module.css'

const Project = ({image, title, text, link}) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.bgFrame}>
                <div className={s.image}
                     style={{backgroundImage: "url(" + image + ")"}}>
                    <div className={s.btnBlock}>
                        <button className={s.btn}>
                            <a target="_blank" href={link}>Open Link</a>
                        </button>
                    </div>
                </div>
                <p>{title}</p>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Project;