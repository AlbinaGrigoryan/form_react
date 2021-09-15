import React from 'react';
import style from './button.module.css'

const Button = ({children, disabled}) => {
    return (
        <button className={!disabled ? style.button : style.disabled} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;