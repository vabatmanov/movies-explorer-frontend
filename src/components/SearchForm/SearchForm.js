import React from 'react';
import FindLogo from '../../images/find-logo.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <img className='search-form__logo' src={FindLogo} alt='Изображение логотипа строки поиска'/>
        <input type="text" className='search-form__input-find' name="find" required
               minLength={2}
               maxLength={40}
               placeholder='Фильм'
               /*value={name}*/
               /*onChange={handleChangeName}*//>
        <button className='search-form__button' type='submit'></button>
        <FilterCheckbox/>
      </div>
    </form>
  );
}

export default SearchForm;
