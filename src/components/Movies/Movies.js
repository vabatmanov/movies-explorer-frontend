import React from 'react';
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({filmList}) {
  return (
    <main className='movies'>
      {/*<SearchForm/>*/}
      {/*<Preloader/>*/}
      <MoviesCardList films={filmList}/>
    </main>
  );
}

export default Movies;
