import React from 'react';
import s from './Icons.module.css'


const Icons = ({img}) => {
    return (
        <div className={s.iconsBlock}>
            <a href="">
                <img className={s.icon} src={img} alt=""/>
            </a>

        </div>
    );
};

export default Icons;