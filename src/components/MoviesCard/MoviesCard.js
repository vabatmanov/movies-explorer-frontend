import React, {useCallback, useEffect, useState} from 'react';
//import LogoLike from '../../images/button-like/like.svg';
//import Img from '../../images/test-img.png';

function MoviesCard({id, nameRU, image, duration, isSaveMovieList,isLocation}) {
  const likeStyle = isLocation === '/movies'?'movies-card__like_status_liked':'movies-card__like_status_disliked';
  const like = isSaveMovieList.find((card) => {
    return(card.movieId === (id?id:card.movieId))
  })?true:false;

  function calcDuration() {
    return (`${Math.floor(duration/60)}ч  ${((duration%60)>0)?duration%60+'м':''}`);
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>{nameRU}</h2>
        <p className='movies-card__duration'>{calcDuration()}</p>
        <button className={`movies-card__like ${like?likeStyle:''}`} type="button">
        </button>
      </div>
      <img className='movies-card__image' src={image.url?image.url:image} alt='Обложка фильма'/>
    </li>
  );
}

export default MoviesCard;
