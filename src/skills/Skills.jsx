import React from 'react';
import s from './skills.module.scss'
import Skill from "./Skill";
import css from '../common/images/css.svg'
import git from '../common/images/git.svg'
import react from '../common/images/react_ts.svg'
import rx from '../common/images/redux-action.svg'
import js from '../common/images/js.svg'
import ant from '../common/images/ant.svg'
import mi from '../common/images/material-ui.svg'
import Bounce from 'react-reveal/Bounce'


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
                 <Bounce >
                 <Skill title={'JS'} icon={js} />
                 <Skill title={'React'} icon={react} />
                 <Skill title={'CSS'} icon={css}/>
                 <Skill title={'Redux'} icon={rx} />
                 <Skill title={'Git'} icon={git} />
                 <Skill title={'AntDesign'} icon={ant} />
                 <Skill title={'Material UI'} icon={mi} />
                 </Bounce>
        </div>
    );
};

export default Skills;