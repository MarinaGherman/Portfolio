import React from 'react';
import s from './Remote.module.css'

const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.title}>
                <h2>Looking for remote</h2>
            </div>
            <div className={s.btnBlock}>
                <button className={s.btn}>
                    Employ me
                </button>
            </div>
        </div>
    );
};

export default Remote;