import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <nav className='footer__links'>
        <a className='footer__link' href='#'>Facebook</a>
        <a className='footer__link' href='#'>Github</a>
        <a className='footer__link' href='#'>Яндекс.Практикум</a>
        <p className='footer__year'>&copy; 2020</p>
      </nav>
    </footer>
  );
}

export default Footer;
