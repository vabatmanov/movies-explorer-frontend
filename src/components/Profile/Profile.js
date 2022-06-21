import React, {useState, useEffect, useContext} from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({onSignOut}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName (e) {
    setName(e.target.value);
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }





  function handleSubmit(e) {
    e.preventDefault();
    console.log('врываюсь')

  }
  useEffect(() => {
    if ((name !== currentUser.name) && (email !== currentUser.email)) {
      setButtonDisable(false);
    } else {
      if (!buttonDisable) {
        setButtonDisable(true);
      }
    }
  }, [name, email]);

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
          <input className='profile__input'
                 type='text'
                 id='name'
                 value={name}
                 onChange={handleChangeName}
          />
        </label>
        <label className='profile__label' htmlFor='email'>E-mail
          <input className='profile__input'
                 type='text' id='email'
                 value={email}
                 onChange={handleChangeEmail}
          />
        </label>
        <button className={`profile__button ${buttonDisable?'profile__button_disabled':''}`} type='submit'>Редактировать</button>
        <button className='profile__link'  type='button' onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </main>
  );
}

export default Profile;
