import React from 'react';
import style from './conditions.module.css'

const Conditions = ({conditions}) => {
    return (
        <div className={style.conditions_wrapper}>
            <input type="checkbox" onChange={conditions}/>
            <span>Принимаю <a href="#"> условия </a> использования</span>
        </div>
    );
};

export default Conditions;