import React from 'react';
import s from './Contacts.module.css'
import Contact from "./Contact";
import fb from '../../common/images/Facebook.png'
import ln from '../../common/images/linkedin.png'
import ins from '../../common/images/instagram.png'
import gh from '../../common/images/github.png'
import gl from '../../common/images/gitlab.png'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contact}>
               <Contact icon={fb} link={"https://www.facebook.com/loly.popa.7"} title={'Facebook'}/>
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
                <Contact icon={ins} link={"https://www.instagram.com/lloly.p/"} title={'Instagram'} />
            </div>
        </div>

    );
};

export default Contacts;