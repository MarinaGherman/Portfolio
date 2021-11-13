import React from 'react';
import s from './Skill.module.css'

const Skill = ({title,text}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon }>
                <img style={{width: '100px'}} src="https://toppng.com/uploads/preview/bootstrap-social-media-icons-html-css-js-logo-11563293145uql7yehdq3.png" alt=""/>
            </div>
            <h3>{title}</h3>
            <span className={s.desc}>
                {text}
            </span>
        </div>
    );
};

export default Skill;