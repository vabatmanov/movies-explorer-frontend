import React from 'react';
import {NavLink} from "react-router-dom";

function Error() {
  return (
    <main className='error'>
      <h1 className='error__title'>404</h1>
      <p className='error__description'>Страница не найдена</p>
      <NavLink className='error__link' to='/'>Назад</NavLink>
    </main>
  );
}

export default Error;
