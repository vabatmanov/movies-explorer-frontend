import React from 'react';
import ProfileImg from '../../images/profile-img.png';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <img className='about-me__profile-img' src={ProfileImg} alt='Изображение автора'/>
        <div className='about-me__profile-detail'>
          <h3 className='about-me__profile-title'>Виталий</h3>
          <p className='about-me__profile-description'><span className='about-me__profession'>Фронтенд-разработчик, 30 лет</span></p>
          <p className='about-me__profile-description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.</p>
          <nav className='about-me__profile-links'>
              <a className='about-me__profile-link' href="https://vk.com/" target="_blank">Facebook</a>
              <a className='about-me__profile-link' href="https://github.com/" target="_blank">Github</a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
