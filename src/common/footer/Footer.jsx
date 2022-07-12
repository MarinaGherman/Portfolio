import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
            <div className={s.footer} id="footer">
                <div className={s.privacy} >
                   <b>To implement this page I used:</b> React JS HOOKS, SCSS-FlexBox, StyledComponents, Media queries and fortawesome icons.<br/>
                   <b>For navigation</b> I used JS method "element.scrollIntoView()" <br/>
                     <b>Install Plugins: </b> react-typing-effect, react-tilt, react-reveal and react-slick-carousel."<br/>
                     <b>Deployed on:</b> Github Pages.
                </div>
            </div>


    );
};

export default Footer;