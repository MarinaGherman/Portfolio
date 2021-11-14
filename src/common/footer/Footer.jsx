import React from 'react';
import s from './Footer.module.css'
import Icons from "./Icons";
import fb from '../images/fb.png'
import vk from '../images/vk-circle.png'
import insta from '../images/instagram.png'

const Footer = () => {
    return (

            <div className={s.footer}>
                <div className={s.icons}>
                    <Icons img={fb}/>
                    <Icons img={vk}/>
                    <Icons img={insta}/>

                </div>
                <div className={s.privacy} >
                    <p>@2021 All rights reserved </p>
                </div>
            </div>


    );
};

export default Footer;