import React from 'react';
import Navigation from "../Navigation/Navigation";

function SideMenu({isOpen, onClose}) {

  function handleClickAwayForm (e) {
    if (e.target.classList.contains('side-menu')) {onClose()}
  }

  function handleButtonClose () {
    onClose();
  }

  return (
    <div className={`side-menu ${(isOpen)?'side-menu_opened':''}`} onClick={handleClickAwayForm} >
      <div className="side-menu__content" >
        <button className="side-menu__button-close" aria-label="Закрыть" type="button" onClick={handleButtonClose} />
        <Navigation isTheme={
          {
            navigation: "navigation_theme_side-menu",
            __top: "navigation__top_theme_side-menu",
            __items: "navigation__items_theme_side-menu",
            __link: "navigation__link_theme_side-menu",
            __link_active: "navigation__link_active_side-menu",
          }
        } />
      </div>
    </div>
  );
}

export default SideMenu;
