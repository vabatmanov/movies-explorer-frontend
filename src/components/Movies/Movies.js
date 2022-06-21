import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <main className='movies'>
      <SearchForm
        isMovieSearchText={props.isMovieSearchText}
        isShortMovieFilter={props.isShortMovieFilter}
        onShortMovieFilter={props.onShortMovieFilter}
        onFirstLoadMovie={props.onFirstLoadMovie}
        onPreloader={props.onPreloader}
        handleFindFilms={props.handleFindFilms}
              />
      <MoviesCardList
        isMovieFound={props.isMovieFound}
        isShortMovieFilter={props.isShortMovieFilter}
        isFirstLoadMovie={props.isFirstLoadMovie}
        isPreloader={props.isPreloader}
      />
    </main>
  );
}

export default Movies;
