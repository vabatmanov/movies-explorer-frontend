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
import {useNavigate, Route, Routes, useLocation, Navigate} from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(false); //Пользователь вошел ?
  const [checkJwt, setCheckJwt] = useState(false); //Проверка токена ?
  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню
  const [preloader, setPreloader] = useState(false); //прелоадер
  const [currentUser, serCurrentUser] = useState({}); //данные о пользователе
  const [movieList, setMovieList] = useState([]); //список фильмов BestFilms
  const [saveMovieList, setSaveMovieList] = useState([]); //список фильмов в закладках
  const [shortMovieFilter, setShortMovieFilter] = useState(false); //состояние checkbox movie
  const [firstLoadMovie, setFirstLoadMovie] = useState(false); //первая загрузка Movie была ?
  const [shortSaveMovieFilter, setShortSaveMovieFilter] = useState(false); //строка поиска
  const [firstLoadSaveMovie, setFirstLoadSaveMovie] = useState(false); //первая загрузка SaveMovie

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
          localStorage.movieSearchText = '';
          localStorage.shortMovieFilter = JSON.stringify(false);
          localStorage.movieFound = JSON.stringify([]);

          localStorage.saveMovieSearchText = '';
          localStorage.shortSaveMovieFilter = JSON.stringify(false);
          localStorage.saveMovieFound = JSON.stringify([]);

          setCheckJwt(true);
        })
    }
  },[])


  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMovies(), MoviesApi.getMovies()])
        .then(([userData, saveMovie, movie]) => {
          serCurrentUser({...userData});

          //загрузка данных при первом входе.
          localStorage.movie = JSON.stringify(movie);
          localStorage.saveMovie = JSON.stringify(saveMovie);

          setMovieList(movie);
          setSaveMovieList(saveMovie)
        })
        .catch(error => console.log(error))
      console.log('Я попал во второй юз эффект');
    }
  }, [loggedIn])


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
        navigate('/movies', { replace: true });
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
        navigate('./', { replace: true });
      })
      .catch(error => {
        console.log(error)
      });
  }

  function handleFindMovies(searchText) {
    localStorage.movieFound = JSON.stringify(
      movieList.filter(item => {
        return ((item.nameRU.toLowerCase()).indexOf(searchText.toLowerCase()) !== -1);
      })
    );
    localStorage.movieSearchText = searchText;
    localStorage.shortMovieFilter = JSON.stringify(shortMovieFilter);
    setShortMovieFilter(JSON.parse(localStorage.shortMovieFilter));
    setPreloader(false);
  }

  function handleFindSaveMovies(searchText) {
    localStorage.saveMovieFound = JSON.stringify(
      saveMovieList.filter(item => {
        return ((item.nameRU.toLowerCase()).indexOf(searchText.toLowerCase()) !== -1);
      })
    );
    localStorage.saveMovieSearchText = searchText;
    localStorage.shortSaveMovieFilter = JSON.stringify(shortMovieFilter);
    setShortSaveMovieFilter(JSON.parse(localStorage.shortSaveMovieFilter));
    setPreloader(false);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      {checkJwt && <div className="App">
        {Constants.HEADER_VISIBLE_DISABLE.includes(isLocation)?'':(
        <Header loggedIn={loggedIn} onSideMenuOpen={handleSideMenuClicked}/>)}
        <Routes>
          <Route path="/" element={
            //<ProtectedRoute loggedIn={loggedIn} isLocation={isLocation}>
              <Main/>
            //</ProtectedRoute>
          }/>

          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                /*isMovieList={movieList}
                isSaveMovieList={saveMovieList}*/

                isMovieFound={JSON.parse(localStorage.movieFound)}
                isMovieSearchText={localStorage.movieSearchText}
                isShortMovieFilter={shortMovieFilter}
                onShortMovieFilter={setShortMovieFilter}

                isFirstLoadMovie={firstLoadMovie}
                onFirstLoadMovie={setFirstLoadMovie}

                isPreloader={preloader}
                onPreloader={setPreloader}

                handleFindFilms={handleFindMovies}
              />
            </ProtectedRoute>
          } />

          {<Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                isMovieFound={JSON.parse(localStorage.saveMovieFound)}
                isMovieSearchText={localStorage.saveMovieSearchText}
                isShortMovieFilter={shortSaveMovieFilter}
                onShortMovieFilter={setShortSaveMovieFilter}

                isFirstLoadMovie={firstLoadSaveMovie}
                onFirstLoadMovie={setFirstLoadSaveMovie}

                isPreloader={preloader}
                onPreloader={setPreloader}

                handleFindFilms={handleFindSaveMovies}
              />
            </ProtectedRoute>
          } />}

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile onSignOut={handleLogOut}/>
            </ProtectedRoute>
          } />


          <Route path="/signup" element={<Register isButton={Constants.REG_BUTTON}/>} />
          <Route path="/signin" element={<Login isLocation={isLocation} isButton={Constants.ENTER_BUTTON} onLogin={handleLogin}/>} />
          <Route path="/error" element={<Error/>} />
          <Route path="/*" element={<Navigate to="/error"/>} />

        </Routes>
        <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
        {Constants.FOOTER_VISIBLE_DISABLE.includes(isLocation)?'':<Footer/>}
      </div>}
    </CurrentUserContext.Provider>
  );
}

export default App;
