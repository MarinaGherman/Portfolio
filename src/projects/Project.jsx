import React from 'react';
import s from './Project.module.scss'
import Tilt from 'react-tilt'

const Project = ({image, title, text, link}) => {
    return (
        <div className={s.projectBlock}>
            <Tilt className="Tilt" options={{ max : 5 }} >
                <div>
                    <div className={s.image}
                         style={{backgroundImage: "url(" + image + ")"}}>
                        <div className={s.btnBlock}>
                            <Tilt className="Tilt" options={{ max : 25 }} >
                            <button className={s.btn}>
                                <a target="_blank" href={link} rel="noreferrer">Open Link</a>
                            </button>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </Tilt>
            <p>{title}</p>
            <span>{text}</span>
        </div>
    );
};

export default Project;