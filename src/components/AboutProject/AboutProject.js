import React from 'react';

function AboutProject() {
  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__title'>О проекте</h2>
      <ul className='aboutproject__content'>
        <li className='aboutproject__item'>
          <h3 className='aboutproject__item-title'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutproject__item-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='aboutproject__item'>
          <h3 className='aboutproject__item-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__item-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
        <li className='aboutproject__item'>
          <div className='aboutproject__period aboutproject__period_theme_black'>
            <h4 className='aboutproject__period-title'>1 неделя</h4>
          </div>
          <div className='aboutproject__period aboutproject__period_theme_gray'>
            <h4 className='aboutproject__period-title aboutproject__period-title_theme_gray'>4 недели</h4>
          </div>
          <div className='aboutproject__period'>
            <p className='aboutproject__period-description'>Back-end</p>
          </div>
          <div className='aboutproject__period'>
            <p className='aboutproject__period-description'>Front-end</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
