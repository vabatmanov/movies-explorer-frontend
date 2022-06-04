import React from 'react';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <input className="filter-checkbox__input" id="switch" type='checkbox'/>
      <label className='filter-checkbox__switch' htmlFor='switch'></label>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
