import React from 'react';
import s from './Skill.module.scss'

const Skill = ({title,link, icon}) => {
    return (
        <div className={s.skillForm}>
            <a href={link}>
                <div className={s.iconBlock}>
                    <img className={s.icon} src={icon} alt=""/>
                </div>
                <span className={s.title}>{title}</span>
            </a>

        </div>
    );
};

export default Skill;