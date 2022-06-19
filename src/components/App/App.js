import './App.css';
import Header from "../Header/Header";
import Main from  "../Main/Main"
import SideMenu from "../SideMenu/SideMenu";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Constants from "../../utils/Constatns";
import auth from "../../utils/auth";
import api from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import React, {useEffect, useState} from "react";
import {useNavigate, Route, Routes, useLocation} from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); //Пользователь вошел ?
  const [checkJwt, setCheckJwt] = useState(false); //Проверка токена ?
  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню
  const [filmList, setFilmList] = useState([]); //список фильмов закладки
  const [allFilmList, setAllFilmList] = useState([]); //список фильмов закладки
  const [preloader, setPreloader] = useState(false); //прелоадер
  const [currentUser, serCurrentUser] = useState({}); //данные о пользователе
  const [loadMovie, setLoadMovie] = useState(false); //первая загрузка Movie
  const [loadSaveMovie, setLoadSaveMovie] = useState(false); //первая загрузка SaveMovie

  let navigate = useNavigate();
  const isLocation = useLocation().pathname;

  useEffect(() => {
    if (!loggedIn) {
      auth.checkToken()
        .then((data) => {
          console.log('Успешная авторизация, по JWT');
          setLoggedIn(true);
        })
        .catch(error => console.log(error))
        .finally(()=> {
          setCheckJwt(true);
        })
    }
  },[])


  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMovies(), MoviesApi.getMovies()])
        .then(([userData, filmList, allFilmList]) => {
          serCurrentUser({...userData});
          setFilmList(filmList);
          setAllFilmList(allFilmList);
        })
        .catch(error => console.log(error))
      console.log('Я попал во второй юз эффект');
    }
  }, [loggedIn])

  /*  .map((item) =>  {
      return {...item, 'image':{...item.image, 'url': Constants.IMG_SERVER + item.image.url}}
    })*/


  function loadBeatFilm() {

  }

  // Фильм находится в закладках ?
  function onLiked(id) {
    return filmList.find(item => item.movieId === id)?true:false;
  }


  // Открывает боковое меню
  function handleSideMenuClicked() {
    setIsSideMenu(true);
  }

  //Закрыть все всплывающие окна
  function allWindowsClose() {
    setIsSideMenu(false);
  }

  function handleLogin ({email, password}) {
    auth.authorize(email, password)
      .then((data) => {
        setLoggedIn(true);
        console.log(data)
        navigate('/', { replace: true });
      })
      .catch(error => {
        /*setIsInfoTooltipOpen({
          status: true,
          statusMessage: false
        });*/
        console.log(error)
      });
  }

  function handleLogOut () {
    auth.logOff()
      .then(() => {
        setLoggedIn(false);
        navigate('/signin', { replace: true });
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {checkJwt && <div className="App">
        {Constants.HEADER_VISIBLE_DISABLE.includes(isLocation) || (loggedIn &&
        <Header loggedIn={loggedIn} onSideMenuOpen={handleSideMenuClicked}/>)}
        <Routes>
          <Route path="/" element={
            <ProtectedRoute loggedIn={loggedIn} isLocation={isLocation}>
              <Main/>
            </ProtectedRoute>
          }/>

          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies filmList={allFilmList} isPreloader={preloader} onLiked={onLiked}/>
            </ProtectedRoute>
          } />

          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies filmList={filmList} isPreloader={preloader} />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onSignOut={handleLogOut}/>
            </ProtectedRoute>
          } />

          <Route path="/signup" element={<Register isButton={Constants.REG_BUTTON}/>} />
          <Route path="/signin" element={<Login isLocation={isLocation} isButton={Constants.ENTER_BUTTON} onLogin={handleLogin}/>} />
          <Route path="/*" element={<Error/>} />

        </Routes>
        <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
        {Constants.FOOTER_VISIBLE_DISABLE.includes(isLocation) || (loggedIn && <Footer/>)}
      </div>}
    </CurrentUserContext.Provider>
  );
}

export default App;
