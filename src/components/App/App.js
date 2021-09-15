import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import Form from "../Form/Form";

function App() {
    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);

    const [tel, setTel] = useState('');
    const [telDirty, setTelDirty] = useState(false);

    const [selectValue, setSelectValue] = useState('');
    const selectItems = ['Русский', 'Английский', 'Китайский', 'Испанский'];

    const [conditions, setConditions] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(name && email && tel && conditions && !nameDirty && !emailDirty && !telDirty && selectValue){
            setFormValid(true)
        }else {
            setFormValid(false)
        }
    }, [nameDirty, emailDirty, telDirty, conditions, selectValue]);

    const selectHandler = (e) => {
        setSelectValue(e.target.innerText)
    };
    const nameHandler = (e) => {
        setName(e.target.value);
        const re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
        if(!re.test(e.target.value)){
            setNameDirty(true)
        }else {
            setNameDirty(false)
        }
    };
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailDirty(true);
        }else {
            setEmailDirty(false)
        }
    };
    const telHandler = (e) => {
        setTel(e.target.value);
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im;
        if(!re.test(e.target.value)){
            setTelDirty(true)
        }else{
            setTelDirty(false)
        }
    };
    const conditionsHandler = (e) => {
        setConditions(e.target.checked);
    };

    const formHandler = (e) => {
        e.preventDefault();
        console.log(name, email, tel, selectValue, formValid  )
    };

  return (
    <div className={style.App}>
      <Form selectHandler={selectHandler} selectValue={selectValue} tel={tel}
            email={email} emailDirty={emailDirty} formHandler={formHandler}
            name={name} conditionsHandler={conditionsHandler} emailHandler={emailHandler}
            selectItems={selectItems} formValid={formValid} nameDirty={nameDirty}
            nameHandler={nameHandler} telDirty={telDirty} telHandler={telHandler}/>
    </div>
  );
}
export default App;
