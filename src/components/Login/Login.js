import React, {useState} from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function Login({isLocation, isButton, onLogin, isEnterError}) {
  const [inputData, setInputData] = useState({email: '',password:''});
  const valid = useFormWithValidation();

  function handleChangeInputData (e) {
    valid.handleChange(e);
    setInputData({...inputData,[e.target.id]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (valid.isValid) {
      onLogin(inputData);
      valid.resetForm();
    }
  }

  return (
    <EntryWindows isLocation={isLocation} isButton={isButton} onSubmitForm={handleSubmit} isValidForm={valid.isValid}>
      <label className='login__label' htmlFor='email'>E-mail
        <input className={`login__input ${valid.errors['login-input-email']?'login__input_error':''}`}
               type='email'
               name='login-input-email'
               id='email'
               placeholder='Введите E-mail'
               value={inputData.email}
               onChange={handleChangeInputData}
               required
        />
      </label>
      <label className='login__label' htmlFor='password'>Пароль
        <input className={`login__input ${valid.errors['login-input-password']?'login__input_error':''}`}
               type='password'
               name='login-input-password'
               id='password'
               placeholder='Введите пароль'
               value={inputData.password}
               onChange={handleChangeInputData}
               required
               minLength='8'
        />
      </label>
      {isEnterError?<span className='login__error-text'>Что-то пошло не так...</span>:''}
    </EntryWindows>
  );
}

export default Login;
