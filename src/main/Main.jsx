import React from 'react';
import s from './main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
                <div className={s.text}>
                    <span> = = =</span>
                    <h1>GhermanMarina</h1>
                    <p>Developer</p>
                </div>
            <div className={s.photo}></div>
        </div>
    );
};

export default Main;