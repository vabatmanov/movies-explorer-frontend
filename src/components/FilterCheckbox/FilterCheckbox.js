import React from 'react';

function FilterCheckbox({isShortMovieFilter, onShortMovieFilter}) {
  function onChangeShortMovie() {
    onShortMovieFilter(!isShortMovieFilter);
  }

  return (
    <div className='filter-checkbox'>
      <input className="filter-checkbox__input" id="switch" type='checkbox'
             checked={isShortMovieFilter}
             onChange={onChangeShortMovie}
      />
      <label className='filter-checkbox__switch' htmlFor='switch'></label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
