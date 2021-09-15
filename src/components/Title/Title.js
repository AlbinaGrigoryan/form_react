import React from 'react';
import style from './title.module.css'

const Title = () => {
    return (
        <div className={style.form_title}>
            <h1>Регистрация </h1>
            <p>
                <span>Уже есть аккаунт? </span>
                <a href="#" className={style.link}>Войти</a>
            </p>
        </div>
    );
};

export default Title;