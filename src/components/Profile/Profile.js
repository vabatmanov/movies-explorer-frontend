import React from 'react';
import {Link} from "react-router-dom";

function Profile() {
  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile__form'>
        <label className='profile__label' htmlFor='name'>Имя
          <input className='profile__input' type='text' id='name' placeholder='Виталий'/>
        </label>
        <label className='profile__label' htmlFor='email'>E-mail
          <input className='profile__input' type='text' id='email' placeholder='pochta@yandex.ru'/>
        </label>
        <button className='profile__button' type='submit'>Редактировать</button>
        <Link className='profile__link'  to='/'>Выйти из аккаунта</Link>
      </form>
    </main>
  );
}

export default Profile;
