import React from 'react';
import s from './Contacts.module.scss'


const Contacts = () => {
    return (
        <div className={s.contactsBlock} id="contacts">
            <div className={s.titleBlock}>
                <h2>My Contacts</h2>
            </div>
            <div className={s.formBlock}>
                <div className={s.form}>
                    <input placeholder="Your name" className={s.input}/>
                    <input placeholder="Your e-mail" className={s.input}/>
                    <textarea className={s.textArea} placeholder="Your message" name="" id="" cols="30" rows="10"/>
                    <div className={s.btnBlock}>
                        <button className={s.btn}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacts;