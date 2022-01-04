import React, {useState} from 'react';
import s from './Main.module.css'
import Button from "../common/button/Button";

const Main = () => {
    return (
        <div className={s.mainBlock} id="main">
                <div >
                    <h1>I'm Marina</h1>
                    <h1 className={s.text}>a Front End Developer.</h1>
                    <Button active={true} text={"Contact"}/>
                    <Button text={"Projects"}/>
                </div>

            <div className={s.photo}>

            </div>
        </div>
    );
};

export default Main;