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
        onHandlePopupOpen={props.onHandlePopupOpen}
        isLocation={props.isLocation}
              />
      <MoviesCardList
        isSaveMovieList={props.isSaveMovieList}
        isMovieFound={props.isMovieFound}
        isShortMovieFilter={props.isShortMovieFilter}
        isFirstLoadMovie={props.isFirstLoadMovie}
        isPreloader={props.isPreloader}
        isLocation={props.isLocation}
        onHandleUpdateLike={props.onHandleUpdateLike}
      />
    </main>
  );
}

export default Movies;
