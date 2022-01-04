import React, {useState} from 'react';
import s from './Button.module.css'


const Button = (props) => {
    // const [active,disabled] = useState(true)
    // const toggleButton = () => {
    //     disabled(!active)
    // }
    return  <button className={props.active ? s.active : s.button}>{props.text}</button>
};

export default Button;