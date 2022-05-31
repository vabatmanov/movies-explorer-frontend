import React from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";

function Register() {
  return (
    <EntryWindows>
      <label className='register__label' htmlFor='name'>Имя
        <input className='register__input' type='text' id='name' placeholder='Введите имя'/>
      </label>
      <label className='register__label' htmlFor='email'>E-mail
        <input className='register__input' type='text' id='email' placeholder='Введите E-mail'/>
      </label>
      <label className='register__label' htmlFor='password'>Пароль
        <input className='register__input' type='password' id='password' placeholder='Введите пароль'/>
      </label>
      <span className='register__error-text'>Что-то пошло не так...</span>
    </EntryWindows>
  );
}

export default Register;
