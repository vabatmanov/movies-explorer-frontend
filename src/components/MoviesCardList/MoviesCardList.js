import React, {useEffect, useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Constants from "../../utils/Constatns";

function MoviesCardList({
                          isMovieFound,
                          isShortMovieFilter,
                          isFirstLoadMovie,
                          isPreloader,
                          isSaveMovieList,
                          isLocation,
                          onHandleUpdateLike,
                          onMovieFound
                        }) {
  const isMoviesLocation = isLocation === '/movies';
  const [count, setCount] = useState(countCard(true))


  function countCard(type) {
    if (isMoviesLocation) {
      return (Constants.MAX_COUNT_FILMS);
    }

    switch (true) {
      case (window.innerWidth >= Constants.WIN_PC.MIN):
        if (type) {
          return Constants.COUNT_DEF_PC;
        } else {
          setCount(count + Constants.COUNT_ADD_COUNT_PC)
        }
        break;
      case (window.innerWidth >= Constants.WIN_TABLET.MIN && window.innerWidth <= Constants.WIN_TABLET.MAX):
        if (type) {
          return Constants.COUNT_DEF_TABLET;
        } else {
          setCount(count + Constants.COUNT_ADD_COUNT_TABLET)
        }
        break;
      default:
        if (type) {
          return Constants.COUNT_DEF_MOBILE;
        } else {
          setCount(count + Constants.COUNT_ADD_COUNT_MOBILE)
        }
    }
  }

  useEffect(() => {
    if (!isMoviesLocation && isFirstLoadMovie) {
      onMovieFound(isSaveMovieList);
    }
  },[isMoviesLocation])

  return (
    <>
      {(isFirstLoadMovie || (!isMoviesLocation))? <ul className={`movies-card-list ${isMoviesLocation ? '' : 'movies-card-list_theme_padding-long'}`}>
        {(isMovieFound.length > 0) ? (isShortMovieFilter ? (
          isMovieFound.filter(item => item.duration < Constants.FILM_DURATION)).slice(0, count) : isMovieFound.slice(0, count)).map(item => {
          return (
            <MoviesCard
              key={item.movieId ? item.movieId : item.id}
              item={item}
              isSaveMovieList={isSaveMovieList}
              isLocation={isLocation}
              onHandleUpdateLike={onHandleUpdateLike}
            />)
        }) : <p className='movie-card-list__text'>Ничего не найдено</p>
        }
      </ul> : ''}

      <Preloader isPreloader={isPreloader}/>
      {(isFirstLoadMovie && isMoviesLocation && ((isShortMovieFilter?isMovieFound.filter(item => item.duration < Constants.FILM_DURATION):isMovieFound.length) > count)) ?
        <button className='movies-card-list__button'
                type="button"
                onClick={() => {
                  countCard(false)
                }}>Ещё</button>
        : null}
    </>
  );
}

export default MoviesCardList;
