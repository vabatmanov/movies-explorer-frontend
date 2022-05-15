import React from 'react';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav className='portfolio__links'>
        <a className='portfolio__link' href='#'>Статичный сайт</a>
        <a className='portfolio__link' href='#'>Адаптивный сайт</a>
        <a className='portfolio__link' href='#'>Одностраничное приложение</a>
      </nav>
    </section>
  );
}

export default Portfolio;
