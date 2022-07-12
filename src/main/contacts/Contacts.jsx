import React from 'react';
import s from './Contacts.module.css'
import Bounce from 'react-reveal/Bounce'
import Contact from "./Contact";
import fb from '../../common/images/Facebook.png'
import ln from '../../common/images/linkedin.png'
import ins from '../../common/images/instagram.png'
import gh from '../../common/images/github.png'
import gl from '../../common/images/gitlab.png'
import mail from '../../common/images/Mail.png'
import tg from '../../common/images/telegram.png'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <Bounce>
            <div className={s.contact}>
                <Contact icon={mail} link={"mailto:marina.gherman@icloud.com"} title={'E-mail'} />
            </div>
            <div className={s.contact}>
                <Contact icon={ln} link={"https://www.linkedin.com/in/marina-gherman-0a129b194/"} title={'LinkedIn'} />
            </div>
            <div className={s.contact}>
                <Contact icon={gh} link={"https://github.com/MarinaGherman"} title={'GitHub'} />
            </div>
            <div className={s.contact}>
                <Contact icon={gl} link={"https://gitlab.com/MarinaGherman"} title={'GitLab'} />
            </div>
            <div className={s.contact}>
                <Contact icon={tg} link={"https://t.me/MarinaGherman"} title={'Telegram'} />
            </div>
            <div className={s.contact}>
                <Contact icon={fb} link={"https://www.facebook.com/loly.popa.7"} title={'Facebook'}/>
            </div>
            <div className={s.contact}>
                <Contact icon={ins} link={"https://www.instagram.com/lloly.p/"} title={'Instagram'} />
            </div>
                </Bounce>
        </div>

    );
};

export default Contacts;