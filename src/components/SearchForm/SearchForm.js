import React, {useState, useEffect} from 'react';
import FindLogo from '../../images/find-logo.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({isMovieSearchText,isShortMovieFilter, onFirstLoadMovie,onPreloader,
                      handleFindFilms, onShortMovieFilter}) {

  const [searchText, setSearchText] = useState('')

  function handleSubmitForm(e) {
    e.preventDefault();
    onFirstLoadMovie(true);
    onPreloader(true);
    handleFindFilms(searchText);

  }

  function onChangeSarchText(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    setSearchText(isMovieSearchText)
  },[isMovieSearchText])

  return (
    <form className='search-form' onSubmit={handleSubmitForm}>
      <div className='search-form__container'>
        <img className='search-form__logo' src={FindLogo} alt='Изображение логотипа строки поиска'/>
        <input type="text" className='search-form__input-find' name="find" required
               minLength={2}
               maxLength={40}
               placeholder='Фильм'
               value={searchText}
               onChange={onChangeSarchText}/>
        <button className='search-form__button' type='submit' ></button>
        <FilterCheckbox
          isShortMovieFilter={isShortMovieFilter}
          onShortMovieFilter={onShortMovieFilter}
        />
      </div>
    </form>
  );
}

export default SearchForm;
