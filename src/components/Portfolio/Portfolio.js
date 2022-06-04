import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav className='portfolio__links'>
        <a className='portfolio__link' href='https://github.com/vabatmanov/how-to-learn' target="_blank" rel="noreferrer">Статичный сайт</a>
        <a className='portfolio__link' href='https://github.com/vabatmanov/mesto' target="_blank" rel="noreferrer">Адаптивный сайт</a>
        <a className='portfolio__link' href='https://github.com/vabatmanov/mesto-react' target="_blank" rel="noreferrer">Одностраничное приложение</a>
      </nav>
    </section>
  );
}

export default Portfolio;
