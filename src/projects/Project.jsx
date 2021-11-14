import React from 'react';
import s from './Project.module.css'

const Project = () => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image}>
                <div className={s.btnBlock}>
                    <button className={s.btn}>Open project</button>
                </div>
            </div>
            <div className={s.desc}>
                <p>Project name</p>
                <span>fgdfbdf frgdfbdf fdfbdfbf dbfdbdfb fdgddfgbfg</span>
            </div>
        </div>
    );
};

export default Project;