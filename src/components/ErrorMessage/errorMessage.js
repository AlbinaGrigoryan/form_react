import React from 'react';
import style from './errorMessage.module.css'

const ErrorMessage = () => {
    return (
        <p className={style.error_message}>
            Введено не корректное значение
        </p>
    );
};

export default ErrorMessage;