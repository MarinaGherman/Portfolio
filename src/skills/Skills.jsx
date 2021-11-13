import React from 'react';
import s from './skills.module.css'
import Skill from "./Skill";

const text = 'dsfsdgsdgd gdfgdfgdfgdb fgfdgfdgdfgdgr fddfg gesg dfsdgggd rgdrgrg ';

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.title}>
                <h2>Skills</h2>
            </div>
             <div className={s.skills}>
                 <Skill title={'JS'} text={text}/>
                 <Skill title={'HTML'} text={text}/>
                 <Skill title={'REACT'} text={text}/>
                 <Skill title={'CSS'} text={text}/>
             </div>
        </div>
    );
};

export default Skills;