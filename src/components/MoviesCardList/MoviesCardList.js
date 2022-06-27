import React, {useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
                          isMovieFound,
                          isShortMovieFilter,
                          isFirstLoadMovie,
                          isPreloader,
                          isSaveMovieList,
                          isLocation,
                          onHandleUpdateLike
                        }) {
  const isMovies = isLocation === '/movies';

  const [count, setCount] = useState(countCard(true))

  function countCard(type) {
    switch (true) {
      case (window.innerWidth >= 1028):
        if (type) {
          return 12;
        } else {
          setCount(count + 3)
        }
        break;
      case (window.innerWidth >= 610 && window.innerWidth <= 1027):
        if (type) {
          return 8;
        } else {
          setCount(count + 2)
        }
        break;
      default:
        if (type) {
          return 5;
        } else {
          setCount(count + 2)
        }
    }
  }

  return (
    <>
      {isFirstLoadMovie ? <ul className={`movies-card-list ${isMovies ? '' : 'movies-card-list_theme_padding-long'}`}>
        {(isMovieFound.length > 0) ? isMovieFound.slice(0, count).map(item => {
          if (isShortMovieFilter) {
            return (
              (item.duration < 41) ?
                <MoviesCard
                  key={item.movieId ? item.movieId : item.id}
                  item={item}
                  isSaveMovieList={isSaveMovieList}
                  isLocation={isLocation}
                  onHandleUpdateLike={onHandleUpdateLike}
                /> : false)
          } else {
            return (
              <MoviesCard
                key={item.movieId ? item.movieId : item.id}
                item={item}
                isSaveMovieList={isSaveMovieList}
                isLocation={isLocation}
                onHandleUpdateLike={onHandleUpdateLike}
              />)
          }
        }) : <p className='movie-card-list__text'>Ничего не найдено</p>

        }
      </ul> : ''}
      <Preloader isPreloader={isPreloader}/>
      {(isFirstLoadMovie && isMovies && (isMovieFound.length > count)) ?
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
