import React from 'react';
//import LogoLike from '../../images/button-like/like.svg';
import Img from '../../images/test-img.png';

function MoviesCard() {
  return (
    <>
    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>33 слова о дизайне</h2>
        <p className='movies-card__duration'>1ч 47м</p>
        <button className='movies-card__like movies-card__like_status_liked' type="button">
          {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
        </button>
      </div>
      <img className='movies-card__image' src={Img} alt='Обложка фильма'/>
    </li>

    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>33 слова о дизайне</h2>
        <p className='movies-card__duration'>1ч 47м</p>
        <button className='movies-card__like movies-card__like_status_disliked' type="button">
          {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
        </button>
      </div>
      <img className='movies-card__image' src={Img} alt='Обложка фильма'/>
    </li>

    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>33 слова о дизайне</h2>
        <p className='movies-card__duration'>1ч 47м</p>
        <button className='movies-card__like' type="button">
          {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
        </button>
      </div>
      <img className='movies-card__image' src={Img} alt='Обложка фильма'/>
    </li>

      <li className='movies-card'>
        <div className='movies-card__header'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <p className='movies-card__duration'>1ч 47м</p>
          <button className='movies-card__like' type="button">
            {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
          </button>
        </div>
        <img className='movies-card__image' src={Img} alt='Обложка фильма'/>
      </li>

      <li className='movies-card'>
        <div className='movies-card__header'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <p className='movies-card__duration'>1ч 47м</p>
          <button className='movies-card__like' type="button">
            {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
          </button>
        </div>
        <img className='movies-card__image' src={Img} alt='Обложка фильма'/>
      </li>
    </>
  );
}

export default MoviesCard;
