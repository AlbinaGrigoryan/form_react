import React from 'react';
import style from './input.module.css'

const Input = ({title, children}) => {
    return (
        <div className={style.input_wrapper}>
            <h5>{title}</h5>
            {children}
        </div>
    );
};

export default Input;