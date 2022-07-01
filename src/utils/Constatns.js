const Constants = {
  FOOTER_VISIBLE_DISABLE: [
    '/profile',
    '/error',
    '/signup',
    '/signin'],
  HEADER_VISIBLE_DISABLE: [
    '/error',
    '/signup',
    '/signin'],
  ENTER_BUTTON: 'Войти',
  REG_BUTTON: 'Зарегистрироваться',
  IMG_SERVER: 'https://api.nomoreparties.co',
  WIN_PC: {
    MIN:1028,
    MAX:0,
  },
  WIN_TABLET: {
    MIN:610,
    MAX:1027,
  },
  COUNT_DEF_PC: 12,
  COUNT_DEF_TABLET: 8,
  COUNT_DEF_MOBILE: 5,
  COUNT_ADD_COUNT_PC: 3,
  COUNT_ADD_COUNT_TABLET: 2,
  COUNT_ADD_COUNT_MOBILE: 2,
  FILM_DURATION: 41,
  MAX_COUNT_FILMS: 1000,
  EXAMPLE: {
    'register-input-email':' Например: test@test.ru',
    'register-input-name':' Например: Иван',
    'register-input-password':' Например: 12345678',
    'login-input-email':' Например: test@test.ru',
    'login-input-password':' Например: 12345678',
  }
}

export default Constants;
