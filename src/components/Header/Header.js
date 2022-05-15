import React  from 'react';
import Logo from '../../images/logo/logo.svg';
import Navigation from '../Navigation/Navigation'
import {Link, useLocation} from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  function handleSideMenuOpen() {
    props.onSideMenuOpen();
  }

  return (
    <header className={`header ${(props.loggedIn && location.pathname !== '/')?'':'header_theme_pink'}`}>
    <img className='logo' src={Logo}  alt='Логотип' />
      {props.loggedIn ? (
          <>
            <Navigation />
            <button className='header__button-menu' type="button" onClick={handleSideMenuOpen}></button>
          </>
        )
      :(<>
          <Link className='header__link' to='/signup'>Регистрация</Link>
          <Link className='header__link' to='/signin'>Войти</Link>
        </>)
      }

    </header>
  );
}

export default Header;
