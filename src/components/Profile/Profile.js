import React, {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function Profile({onSignOut, onUpdateProfile}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const currentUser = useContext(CurrentUserContext);
  const valid = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (valid.isValid && (name !== currentUser.name || email !== currentUser.email)) {
      onUpdateProfile({name, email});
      valid.resetForm();
    }
  }

  function handleChangeName (e) {
    valid.handleChange(e);
    setName(e.target.value);
  }

  function handleChangeEmail (e) {
    valid.handleChange(e);
    setEmail(e.target.value);
  }


 useEffect(() => {
    if (currentUser.name) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <label className='profile__label' htmlFor='name'>Имя
          <input className={`profile__input ${valid.errors['profile-input-name']?'profile__label_error':''}`}
                 type='text'
                 name='profile-input-name'
                 value={name}
                 onChange={handleChangeName}
                 required
                 minLength='2'
                 maxLength='30'
          />
        </label>
        <label className='profile__label' htmlFor='email'>E-mail
          <input className={`profile__input ${valid.errors['profile-input-email']?'profile__label_error':''}`}
                 type='email'
                 name='profile-input-email'
                 value={email}
                 onChange={handleChangeEmail}
                 required
          />
        </label>
        <button className={`profile__button ${valid.isValid && (name !== currentUser.name || email !== currentUser.email)?'':'profile__button_disabled'}`} type='submit'>Редактировать</button>
        <button className='profile__link'  type='button' onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;
