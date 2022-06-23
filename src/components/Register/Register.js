import React, {useState} from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function Register({isLocation ,isButton, isEnterError, onRegister}) {
  const [inputData, setInputData] = useState({email: '', password:'', name:''});
  const valid = useFormWithValidation();

  function handleChangeInputData (e) {
    valid.handleChange(e);
    setInputData({...inputData,[e.target.id]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (valid.isValid) {
      onRegister(inputData);
      valid.resetForm();
    }
  }


  return (
    <EntryWindows isLocation={isLocation} isButton={isButton} onSubmitForm={handleSubmit} isValidForm={valid.isValid}>
      <label className='register__label' htmlFor='name'>Имя
        <input className={`register__input ${valid.errors['register-input-name']?'register__input_error':''}`}
               type='text'
               name='register-input-name'
               id='name'
               placeholder='Введите имя'
               value={inputData.name}
               onChange={handleChangeInputData}
               minLength='2'
               maxLength='30'
               required
        />
      </label>
      <label className='register__label' htmlFor='email'>E-mail
        <input className={`register__input ${valid.errors['register-input-email']?'register__input_error':''}`}
               type='email'
               name='register-input-email'
               id='email'
               placeholder='Введите E-mail'
               value={inputData.email}
               onChange={handleChangeInputData}
               required
        />
      </label>
      <label className='register__label' htmlFor='password'>Пароль
        <input className={`register__input ${valid.errors['register-input-password']?'register__input_error':''}`}
               type='password'
               name='register-input-password'
               id='password'
               placeholder='Введите пароль'
               value={inputData.password}
               onChange={handleChangeInputData}
               minLength='8'
               required
        />
      </label>
      {isEnterError?<span className='register__error-text'>Что-то пошло не так...</span>:''}
    </EntryWindows>
  );
}

export default Register;
