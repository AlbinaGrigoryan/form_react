import React, {useState, useEffect} from 'react';
import style from './form.module.css';
import Title from "../Title/Title";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import Conditions from "../Conditions/Conditions";
import ErrorMessage from "../ErrorMessage/errorMessage";

const Form = ({name, tel, telHandler, telDirty,
                  nameDirty, formHandler, nameHandler,
                  email, emailDirty, emailHandler, selectHandler, selectItems,
                  conditionsHandler, formValid, selectValue}) => {

    return (
        <form className={style.form_container} onSubmit={formHandler}>
            <Title/>
            <Input  title='Имя' >
                <input type="text"
                       placeholder='Введите Ваше имя'
                       value = {name}
                       onChange={nameHandler}/>
                {nameDirty === false ? null : <ErrorMessage/>}
            </Input>
            <Input  title='Email' >
                <input type="email"
                       placeholder='Введите ваш email'
                       value = {email}
                       onChange={emailHandler}/>
                {emailDirty === false ? null : <ErrorMessage/>}
            </Input>
            <Input  title='Номер телефона' >
                <input type="tel"
                       placeholder='Введите номер телефона'
                       value = {tel}
                       onChange = {telHandler}/>
                {telDirty === false ? null : <ErrorMessage/>}
            </Input>

            <Input  title='Язык' >
                <Select selectHandler={selectHandler} selectItems={selectItems} selectValue={selectValue}/>
            </Input>
            <Conditions conditions = {conditionsHandler}/>
            <Button disabled={!formValid} type='submit'>Зарегистрироваться</Button>
        </form>
    );
};

export default Form;