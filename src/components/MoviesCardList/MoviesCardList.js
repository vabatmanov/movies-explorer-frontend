import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({films, isPreloader, onLiked}) {
  const isMovies = useLocation().pathname === '/movies';




  return (
    <>
    <ul className={`movies-card-list ${isMovies?null:'movies-card-list_theme_padding-long'}`}>
      {(films.length > 0) && films.map(item =>
        <MoviesCard
          key={item.movieId?item.movieId:item.id}
          {...item}
          isLiked={(item.id?onLiked(item.id):'')}
        />)
      }
    </ul>
      <Preloader isPreloader={isPreloader}/>
      {isMovies ? <button className='movies-card-list__button' type="button">Ещё</button>:null}
    </>
  );
}

export default MoviesCardList;
