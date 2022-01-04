import React from 'react';
import s from './Contacts.module.css'

const Contact = ({link,title,icon}) => {
    return (
        <div className={s.contactForm}>
            <a href={link}>
                <div className={s.iconBlock}>
                    <img className={s.icon} src={icon} alt=""/>
                </div>
                <span className={s.title}>{title}</span>
            </a>

            
        </div>
    );
};

export default Contact;