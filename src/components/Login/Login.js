import React from 'react';
import EntryWindows from "../EntryWindows/EntryWindows";

function Login({isLocation}) {
  return (
    <EntryWindows isLocation={isLocation}>
      <label className='login__label' htmlFor='email'>E-mail
        <input className='login__input' type='text' id='email' placeholder='Введите E-mail'/>
      </label>
      <label className='login__label' htmlFor='password'>Пароль
        <input className='login__input' type='password' id='password' placeholder='Введите пароль'/>
      </label>
      <span className='login__error-text'>Что-то пошло не так...</span>
    </EntryWindows>
  );
}

export default Login;
