import React, {useState} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {useWindowSize} from "../../hooks/useWindowsSize";

function MoviesCardList({
                          isMovieFound,
                          isShortMovieFilter,
                          isFirstLoadMovie,
                          isPreloader,
                          isSaveMovieList,
                          isLocation,
                          onHandleUpdateLike}) {
  const isMovies = useLocation().pathname === '/movies';
  //const width = useWindowSize();

/*  const [defaultCount, setDefaultCount] = useState(0);
  //setDefaultCount(() => )
  switch(true) {
    case (width > 609):
      console.log( '3' );
      break;
    case (width > 609):
      console.log( '2' );
      break;
    default:
      console.log( "1" );
  }*/

  return (
    <>
      {isFirstLoadMovie ? <ul className={`movies-card-list ${isMovies ? '' : 'movies-card-list_theme_padding-long'}`}>
        {(isMovieFound.length > 0) ? isMovieFound.map(item => {
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
        }):<p className='movie-card-list__text'>Ничего не найдено</p>

        }
      </ul> : ''}
      <Preloader isPreloader={isPreloader}/>
      {(isFirstLoadMovie && isMovies) ? <button className='movies-card-list__button' type="button">Ещё</button> : null}
    </>
  );
}

export default MoviesCardList;
