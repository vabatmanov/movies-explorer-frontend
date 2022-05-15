import React from 'react';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <h3 className='techs__tech-title'>7 технологий</h3>
      <p className='techs__tech-description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__items'>
        <li className='techs__item'><h4 className='techs__item-title'>HTML</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>CSS</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>JS</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>React</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>Git</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>Express.js</h4></li>
        <li className='techs__item'><h4 className='techs__item-title'>mongoDB</h4></li>
      </ul>
    </section>
  );
}

export default Techs;
