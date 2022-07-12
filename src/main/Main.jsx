import React, {useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Main.module.scss'
import Button from "../common/button/Button";
import Contacts from "./contacts/Contacts";
import Skills from "../skills/Skills";
import Tilt from "react-tilt";


const CONTACTS = "CONTACTS"
const SKILLS = "SKILLS"

const Main = () => {
    const [show, setShow] = useState(CONTACTS);
    return (
        <div className={s.generalBlock}>
            <div className={s.mainBlock} >
                <div className={s.myBlock}>
                    <h1 className={s.title}>I'm Marina</h1>
                    <ReactTypingEffect
                        text={["a Front End Developer."]}
                    />
                </div>
                    <div className={s.contactContainer}>
                        <Button onClick={() => setShow(CONTACTS)} active={show === CONTACTS}>Contacts</Button>
                        <Button onClick={() => setShow(SKILLS)} active={show === SKILLS}>Skills</Button>
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
            <div className={s.line}/>
            <div className={s.avatarBlock}>
                <Tilt className="Tilt" options={{ max : 35 }} >
                    <div className={s.avatar}/>
                </Tilt>
            </div>
        </div>
        
    );
};

export default Main;