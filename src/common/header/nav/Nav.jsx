import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    const scrollTo = view => document.getElementById(view).scrollIntoView({behavior: "smooth"})
    return (
        <div className={s.nav}>
            <a onClick={() => scrollTo('main')}>Main</a>
            <a onClick={() => scrollTo('projects')}>Projects</a>
            <a onClick={() => scrollTo('contacts')}>Contacts</a>
        </div>
    );
};

export default Nav;