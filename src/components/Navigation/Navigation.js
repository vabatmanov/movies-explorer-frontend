import React from 'react';
import ProfileLogo from '../../images/profile-logo.svg';
import {NavLink, Link} from "react-router-dom";

function Navigation({isTheme}) {
  const setActiveLink = ({isActive}) => (`navigation__link ${isTheme && isTheme.__link} `+(isActive ? (isTheme ? isTheme.__link_active:"navigation__link_active_default"):""));

  return (
    <nav className={`navigation ${isTheme && isTheme.navigation}`}>
      <ul className={`navigation__top ${isTheme && isTheme.__top}`}>
        <li className={`navigation__items ${isTheme && isTheme.__items} navigation__items_device_tablet`}>
          <NavLink className={setActiveLink}  to='/'>Главная</NavLink>
        </li>
        <li className={`navigation__items ${isTheme && isTheme.__items}`}>
          <NavLink className={setActiveLink} to='/movies'>Фильмы</NavLink>
        </li>
        <li className={`navigation__items ${isTheme && isTheme.__items}`}>
          <NavLink className={setActiveLink} to='/saved-movies'>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <Link className='navigation__button' to='/profile'>
        <p className='navigation__button-text'>Аккаунт</p>
        <figure className='navigation__button-background-logo'>
          <img className='navigation__button-logo' src={ProfileLogo} alt="Логотип аккаунта"/>
        </figure>
      </Link>
    </nav>
  );
}

export default Navigation;
