import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.bgFrame}>
                <div className={s.image}>
                    <div className={s.btnBlock}>
                        <button className={s.btn}>Open project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;