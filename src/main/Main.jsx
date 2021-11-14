import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock} id="main">
                <div className={s.text}>
                    <span> = = =</span>
                    <h1>Gherman Marina</h1>
                    <p>WEB-Developer</p>
                </div>
            <div className={s.photo}>

            </div>
        </div>
    );
};

export default Main;