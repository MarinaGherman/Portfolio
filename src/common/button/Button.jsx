import React from 'react';
import s from './Button.module.css'


const Button = (props) => {
    return <button onClick={props.onClick} className={props.active ? s.active : s.button}>{props.children}</button>
};

export default Button;