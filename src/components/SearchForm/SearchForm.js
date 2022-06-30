import React, {useState, useEffect} from 'react';
import FindLogo from '../../images/find-logo.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from "../../hooks/useFormWithValidation";

function SearchForm({
                      isMovieSearchText, isShortMovieFilter, onFirstLoadMovie, onPreloader,
                      handleFindFilms, onShortMovieFilter, onHandlePopupOpen, isLocation
                    }) {

  const [searchText, setSearchText] = useState('')
  const valid = useFormWithValidation();

  function handleSubmitForm(e) {
    e.preventDefault();
    if (valid.isValid) {
      onFirstLoadMovie(true);
      onPreloader(true);
      handleFindFilms(searchText);
    } else {
      onHandlePopupOpen('Нужно ввести ключевое слово')
      /*onHandlePopupOpen(valid.errors['search-input-find'] ? valid.errors['search-input-find']
       : 'Нужно ввести ключевое слово')*/
    }
  }

  function onChangeSearchText(e) {
    valid.handleChange(e);
    setSearchText(e.target.value);
  }

  useEffect(() => {
    setSearchText(isMovieSearchText)
  }, [isMovieSearchText, isLocation])


  return (
    <form className='search-form' onSubmit={handleSubmitForm} noValidate>
      <div className='search-form__container'>
        <img className='search-form__logo' src={FindLogo} alt='Изображение логотипа строки поиска'/>
        <input type="text" className='search-form__input-find'
               name="search-input-find"
               maxLength={40}
               required
               placeholder='Фильм'
               value={searchText}
               onChange={onChangeSearchText}/>
        <button className='search-form__button' type='button' onClick={handleSubmitForm}></button>
        <FilterCheckbox
          isShortMovieFilter={isShortMovieFilter}
          onShortMovieFilter={onShortMovieFilter}
        />
      </div>
    </form>
  );
}

export default SearchForm;
