import React from 'react';
import s from './Main.module.css'
import Button from "../common/button/Button";
import Contacts from "./contacts/Contacts";

const Main = () => {
    return (
        <div className={s.mainBlock} id="main">
                <div>
                    <h1>I'm Marina</h1>
                    <h1 className={s.text}>a Front End Developer.</h1>
                    <Button active={true} text={"Contact"}/>
                    <Button text={"Projects"}/>
                </div>
            <div>
                <Contacts/>
            </div>
        </div>
    );
};

export default Main;