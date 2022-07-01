import React from 'react';

function Popup({isPopupOpen, isErrorText}) {

  return (
    <div className={`popup ${isPopupOpen?'popup_opened':''}`}>
        <p className='popup__text'>{isErrorText?isErrorText:'тут будет текст ошибки'}</p>
    </div>
  )
}

export default Popup;
