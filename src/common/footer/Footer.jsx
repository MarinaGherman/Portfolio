import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
            <div className={s.footer}>
                <div className={s.privacy} >
                    <p>@2021 All rights reserved </p>
                </div>
            </div>


    );
};

export default Footer;