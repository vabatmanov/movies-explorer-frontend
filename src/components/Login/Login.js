import React, {useEffect, useState} from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";
import Constants from "../../utils/Constatns";

function Login({isLocation, isButton, onLogin, isEnterError, isLoggedIn, onNavigate}) {
  const [inputData, setInputData] = useState({email: '',password:''});
  const valid = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState('');

  function handleChangeInputData (e) {
    valid.handleChange(e);
    setInputData({...inputData,[e.target.id]: e.target.value});
    createErrorMessage(e);
  }

  function createErrorMessage(e) {
    if (e.target.validationMessage !== '') {
      setErrorMessage( e.target.validationMessage + Constants.EXAMPLE[e.target.name]);
    } else {
      setErrorMessage( '');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (valid.isValid) {
      onLogin(inputData);
      valid.resetForm();
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      onNavigate('/movies', {replace: true});
    }
  },[])

  return (
    <EntryWindows isLocation={isLocation} isButton={isButton} onSubmitForm={handleSubmit} isValidForm={valid.isValid}>
      <label className='login__label' htmlFor='email'>E-mail
        <input className={`login__input ${valid.errors['login-input-email']?'login__input_error':''}`}
               type='text'
               name='login-input-email'
               id='email'
               pattern="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,})"
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
      {errorMessage || isEnterError?<span className='register__error-text'>{errorMessage?errorMessage:'Что-то пошло не так...'}</span>:''}
    </EntryWindows>
  );
}

export default Login;
