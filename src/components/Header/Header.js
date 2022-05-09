import React  from 'react';
import Logo from "../../images/logo/logo.svg";
import Navigation from '../Navigation/Navigation'
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="logo" src={Logo}  alt="Логотип" />
      {props.loggedIn ? (
          <>
            <Navigation />
            <button className='header__button-menu'></button>
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
