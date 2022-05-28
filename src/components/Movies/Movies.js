import React from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({filmList, isLoading}) {
  return (
    <main className='movies'>
      <SearchForm/>
      <MoviesCardList films={filmList} isLoading={isLoading}/>
    </main>
  );
}

export default Movies;
