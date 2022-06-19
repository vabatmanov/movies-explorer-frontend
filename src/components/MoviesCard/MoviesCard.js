import React from 'react';
//import LogoLike from '../../images/button-like/like.svg';
//import Img from '../../images/test-img.png';

function MoviesCard({id, nameRU, image, duration, isLiked}) {
  function calcDuration() {
    return (`${Math.floor(duration/60)}ч  ${((duration%60)>0)?duration%60+'м':''}`);
  }


  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <p className='movies-card__duration'>{calcDuration()}</p>
        <button className={`movies-card__like ${isLiked?'movies-card__like_status_liked':''}`} type="button">
          {/*<img className='movies-card__logo-like' src={LogoLike} alt='Иконка, фильм сохранен'/>*/}
        </button>
      </div>
      <img className='movies-card__image' src={image.url?image.url:image} alt='Обложка фильма'/>
    </li>
  );
}

export default MoviesCard;
