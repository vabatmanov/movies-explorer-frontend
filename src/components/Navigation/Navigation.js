import React from 'react';
import ProfileLogo from '../../images/profile-logo.svg';
import {NavLink} from "react-router-dom";

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__top'>
        <li className='navigation__items navigation__items_device_tablet'><NavLink className='navigation__link' activeClassName='navigation__link_active' to='/'>Главная</NavLink></li>
        <li className='navigation__items'><NavLink className='navigation__link' activeClassName='navigation__link_active' to='/movie'>Фильмы</NavLink></li>
        <li className='navigation__items'><NavLink className='navigation__link' activeClassName='navigation__link_active' to='/saved-movies'>Сохранённые фильмы</NavLink></li>
      </ul>
      <button className='navigation__button'>
        <p className='navigation__button-text'>Аккаунт</p>
        <figure className='navigation__button-background-logo'>
          <img className='navigation__button-logo' src={ProfileLogo} alt="Логотип аккаунта"/>
        </figure>
      </button>
    </nav>
  );
}

export default Navigation;
