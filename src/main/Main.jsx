import React, {useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Main.module.css'
import Button from "../common/button/Button";
import Contacts from "./contacts/Contacts";
import Skills from "../skills/Skills";

const CONTACTS = "CONTACTS"
const SKILLS = "SKILLS"

const Main = () => {
    const [show, setShow] = useState(CONTACTS);
    return (
        <div className={s.generalBlock}>
            <div className={s.mainBlock} id="main">
                <div>
                    <h1 className={s.title}>I'm Marina</h1>
                    <ReactTypingEffect
                        text={["a Front End Developer."]}
                    />
                    <h1 className={s.text}>a Front End Developer.</h1>

                    <div className={s.contactContainer}>
                        <Button onClick={() => setShow(CONTACTS)} active={show === CONTACTS}>Contact</Button>
                        <Button onClick={() => setShow(SKILLS)} active={show === SKILLS}>Skills</Button>
                    </div>
                </div>

                {show === CONTACTS && (
                    <div >
                        <Contacts/>
                    </div>
                )}
                {show === SKILLS && (
                    <div>
                        <Skills/>
                    </div>
                )}
            </div>
            <div className={s.img}/>
        </div>
        
    );
};

export default Main;