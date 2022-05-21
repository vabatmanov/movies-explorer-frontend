import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className='footer__links'>
        <a className='footer__link' href='https://facebook.com/' target="_blank" rel="noreferrer">Facebook</a>
        <a className='footer__link' href='https://github.com/' target="_blank" rel="noreferrer">Github</a>
        <a className='footer__link' href='https://practicum.yandex.ru' target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        <p className='footer__year'>&copy; 2020</p>
      </nav>
    </footer>
  );
}

export default Footer;
