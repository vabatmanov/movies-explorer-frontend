import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
                          isMovieFound,
                          isShortMovieFilter,
                          isFirstLoadMovie,
                          isPreloader,
                          isSaveMovieList,
                          isLocation}) {
  const isMovies = useLocation().pathname === '/movies';

  return (
    <>
      {isFirstLoadMovie ? <ul className={`movies-card-list ${isMovies ? '' : 'movies-card-list_theme_padding-long'}`}>
        {(isMovieFound.length > 0) && isMovieFound.map(item => {
            if (isShortMovieFilter) {
              return (
                (item.duration < 41)?
                <MoviesCard
                  key={item.movieId ? item.movieId : item.id}
                  {...item}
                  isSaveMovieList={isSaveMovieList}
                  isLocation={isLocation}
                />:false)
            } else {
              return (
                <MoviesCard
                  key={item.movieId ? item.movieId : item.id}
                  {...item}
                  isSaveMovieList={isSaveMovieList}
                  isLocation={isLocation}
                />)
            }
        })
        }
      </ul> : ''}
      <Preloader isPreloader={isPreloader}/>
      {(isFirstLoadMovie && isMovies) ? <button className='movies-card-list__button' type="button">Ещё</button> : null}
    </>
  );
}

export default MoviesCardList;
