import React from 'react';

function MoviesCard({item, isSaveMovieList, isLocation, onHandleUpdateLike}) {
  const card = item;
  const likeStyle = isLocation === '/movies'?'movies-card__like_status_liked':'movies-card__like_status_disliked';

  const like = isSaveMovieList.find((card) => {
    return(card.movieId === (item.id?item.id:card.movieId))
  })?true:false;

  function calcDuration() {
    return (`${Math.floor(item.duration/60)}ч  ${((item.duration%60)>0)?item.duration%60+'м':''}`);
  }

  function handleClickLike() {
    onHandleUpdateLike({...card, 'movieId':(card.id?card.id:card.movieId)});
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__header'>
        <h2 className='movies-card__title'>{item.nameRU}</h2>
        <p className='movies-card__duration'>{calcDuration()}</p>
        <button className={`movies-card__like ${like?likeStyle:''}`} type="button" onClick={handleClickLike}>
        </button>
      </div>
      <a className='movies-card__link' target="_blank" href={item.trailerLink} rel="noreferrer" >
        <img className='movies-card__image' src={item.image.url?item.image.url:item.image} alt='Обложка фильма'/>
      </a>
    </li>
  );
}

export default MoviesCard;
