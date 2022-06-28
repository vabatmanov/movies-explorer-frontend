import React from 'react';
import Logo from '../../images/logo/logo.svg';
import {Link} from "react-router-dom";

function EntryWindows({children, isLocation, isButton, onSubmitForm, isValidForm}) {
  return (
    <main className='entry-windows'>
      <img className='entry-windows__logo' src={Logo} alt='Изображение логотипа'/>
      <h1 className='entry-windows__title'>Добро пожаловать!</h1>
      <form className='entry-windows__form' onSubmit={onSubmitForm}>
        {children}
        <button
          className={`entry-windows__form-button
          ${isLocation === '/singin'?' entry-windows__form-button_theme_login ':' '}
          ${isValidForm?'':'entry-windows__form-button_theme_error'}
          `}
          type='submit'>{isButton}</button>
        {isLocation === '/signup'?
          <p className='entry-windows__question'>Уже зарегистрированы?&nbsp;&nbsp;
            <Link className='entry-windows__link' to='/signin'>Войти</Link>
          </p>:
          <p className='entry-windows__question'>Ещё не зарегистрированы?&nbsp;&nbsp;
            <Link className='entry-windows__link' to='/signup'>Регистрация</Link>
          </p>
        }

      </form>
    </main>
  );
}

export default EntryWindows;
