import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({filmList, isPreloader, onLiked}) {
  return (
    <main className='movies'>
      <SearchForm/>
      <MoviesCardList films={filmList} isPreloader={isPreloader} onLiked={onLiked}/>
    </main>
  );
}

export default Movies;
