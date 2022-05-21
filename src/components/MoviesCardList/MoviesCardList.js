import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({films}) {
  return (
    <ul className='movies-card-list'>
      {(films.length > 0) && films.map(item => <MoviesCard key={item._id} {...item}  />)}
    </ul>
  );
}

export default MoviesCardList;
