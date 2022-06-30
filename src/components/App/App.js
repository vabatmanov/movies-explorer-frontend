import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main"
import SideMenu from "../SideMenu/SideMenu";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Popup from "../Popup/Popup";
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
  const [popupOpen, setPopupOpen] = useState(false); //Открытие popup
  const [popup, setPopupText] = useState(''); //popup текст ошибки
  const [enterError, setEnterError] = useState(false); //определение ошибки при входе или регистрации

  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню
  const [preloader, setPreloader] = useState(false); //прелоадер
  const [currentUser, serCurrentUser] = useState({}); //данные о пользователе
  const [movieList, setMovieList] = useState([]); //список фильмов BestFilms
  const [saveMovieList, setSaveMovieList] = useState([]); //список фильмов в закладках

  const [movieFound, setMovieFound] = useState(localStorage.movieFound?JSON.parse(localStorage.movieFound):[]); //найденные фильмы
  const [shortMovieFilter, setShortMovieFilter] = useState(localStorage.shortMovieFilter?JSON.parse(localStorage.shortMovieFilter):false); //состояние checkbox movie
  const [firstLoadMovie, setFirstLoadMovie] = useState(localStorage.firstLoadMovie?JSON.parse(localStorage.firstLoadMovie):false); //первая загрузка Movie была ?

  const [saveMovieFound, setSaveMovieFound] = useState([]); //найденные фильмы в закладках
  const [shortSaveMovieFilter, setShortSaveMovieFilter] = useState(false); //строка поиска
  const [firstLoadSaveMovie, setFirstLoadSaveMovie] = useState(false); //первая загрузка SaveMovie

  let navigate = useNavigate();
  const isLocation = useLocation().pathname;

  useEffect(() => {
    if (!loggedIn) {
      auth.checkToken()
        .then(() => {
          setLoggedIn(true);
        })
        .catch(error => console.log(error))
        .finally(() => {
          //localStorage.movieSearchText = '';
          //localStorage.shortMovieFilter = JSON.stringify(false);
          //localStorage.movieFound = JSON.stringify([]);
    /*    setMovieFound(localStorage.movieFound?JSON.parse(localStorage.movieFound):[])
          setShortMovieFilter(localStorage.movieFound?JSON.parse(localStorage.movieFound):false)
          setFirstLoadMovie(localStorage.firstLoadMovie?JSON.parse(localStorage.firstLoadMovie):false)*/


          localStorage.saveMovieSearchText = '';
          localStorage.shortSaveMovieFilter = JSON.stringify(false);
          localStorage.saveMovieFound = JSON.stringify([]);

          setCheckJwt(true);
        })
    }
  }, [])


  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getMovies(), MoviesApi.getMovies()])
        .then(([userData, saveMovie, movie]) => {
          serCurrentUser({...userData});

          //загрузка данных при первом входе.
          const newMovie = movie.map((item) => {
            return {...item, 'image': {...item.image, 'url': Constants.IMG_SERVER + item.image.url}}
          })

          localStorage.movie = JSON.stringify(newMovie);
          localStorage.saveMovie = JSON.stringify(saveMovie);

          setMovieList(newMovie);
          setSaveMovieList(saveMovie)
          setSaveMovieFound(saveMovie);
        })
        .catch(error => handlePopupOpen(`${error}. Во время запроса произошла ошибка. Возможно, проблема с
        соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`))
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

  function handleLogin({email, password}) {
    auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', {replace: true});
      })
      .catch(error => {
        setEnterError(true);
        handlePopupOpen(`${error}, что-то пошло не так`);
      });
  }

  function handleRegister({email, password, name}) {
    auth.register(email, password, name)
      .then(() => {
        return (auth.authorize(email, password))
      })
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', {replace: true});
      })
      .catch(error => {
        setEnterError(true);
        handlePopupOpen(`${error}, что-то пошло не так`);
      });
  }

  function handleLogOut() {
    auth.logOff()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        setSaveMovieList([]);
        setMovieFound([])
        setShortMovieFilter(false);
        serCurrentUser({});
        navigate('./', {replace: true});
      })
      .catch(error => {
        handlePopupOpen(`${error}, выход отменен`);
      });
  }

  function handlePopupOpen(errorText) {
    setPopupText(errorText);
    setPopupOpen(true);

    setTimeout(() => {
      setPopupOpen(false);
    }, 5000);
  }

  function handleUpdateLike(card) {
    const film = saveMovieList.find((item) => {
      return (item.movieId === card.movieId)
    })
    if (card._id) {
      handleDeleteCard(film._id);
    } else {

      if (!film) {
        handleAddCard({
          country: card.country || 'unknown',
          director: card.director  || 'unknown',
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: card.image.url,
          trailerLink: card.trailerLink,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          thumbnail: Constants.IMG_SERVER + card.image.formats.thumbnail.url,
          movieId: card.id,
        })
      } else {
        handleDeleteCard(film._id);
      }
    }
  }


  function handleAddCard(card) {
    api.addMovie(card)
      .then((data) => {
        setSaveMovieList([...saveMovieList, {...data}])
      })
      .catch((error) => {
        handlePopupOpen(`${error}, лайк не установлен.`);
      })
  }

  function handleDeleteCard(cardId) {
    api.removeMovie(cardId)
      .then(() => {
        const newArray = saveMovieList.filter((item) => {
          return (item._id !== cardId)
        })

        const newArrayFound = saveMovieFound.filter((item) => {
          return (item._id !== cardId)
        })
        setSaveMovieList(newArray);
        setSaveMovieFound(newArrayFound);
      })
      .catch((error) => {
        handlePopupOpen(`${error}, карточка не удалена.`);
      })
  }

  function handleUpdateProfile(userData) {
    api.editProfile(userData)
      .then((userData) => {
        serCurrentUser(userData);
        handlePopupOpen('Профиль обновлен');
      })
      .catch((error) => {
        handlePopupOpen(`${error}, профиль не обновлен.`);
      })
  }

  function handleFirstLoadMovie(e) {
    if (!firstLoadMovie) {
      localStorage.firstLoadMovie = JSON.stringify(true);
      setFirstLoadMovie(true);
    }
  }

  function handleChangeShortMovie() {
    localStorage.shortMovieFilter = JSON.stringify(!shortMovieFilter);
    setShortMovieFilter(!shortMovieFilter);
  }

  function handleFindMovies(searchText) {
    localStorage.movieFound = JSON.stringify(
      movieList.filter(item => {
        return ((item.nameRU.toLowerCase()).indexOf(searchText.toLowerCase()) !== -1);
      })
    );

    localStorage.shortMovieFilter = JSON.stringify(shortMovieFilter);
    setShortMovieFilter(JSON.parse(localStorage.shortMovieFilter));
    setMovieFound(JSON.parse(localStorage.movieFound));
    setPreloader(false);

    localStorage.movieSearchText = searchText;
  }

  function handleFindSaveMovies(searchText) {
    localStorage.saveMovieFound = JSON.stringify(
      saveMovieList.filter(item => {
        return ((item.nameRU.toLowerCase()).indexOf(searchText.toLowerCase()) !== -1);
      })
    );

    localStorage.shortSaveMovieFilter = JSON.stringify(shortSaveMovieFilter);
    setShortSaveMovieFilter(JSON.parse(localStorage.shortSaveMovieFilter));
    setSaveMovieFound(JSON.parse(localStorage.saveMovieFound));
    setPreloader(false);

    localStorage.saveMovieSearchText = searchText;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      {checkJwt && <div className="App">
        <Popup isPopupOpen={popupOpen} isErrorText={popup}/>
        {Constants.HEADER_VISIBLE_DISABLE.includes(isLocation) ? '' : (
          <Header loggedIn={loggedIn} onSideMenuOpen={handleSideMenuClicked}/>)}
        <Routes>
          <Route path="/" element={
            <Main/>
          }/>

          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                /*isMovieList={movieList}
                isSaveMovieList={saveMovieList}*/
                isSaveMovieList={saveMovieList}
                isMovieFound={movieFound}
                isMovieSearchText={localStorage.movieSearchText}
                isShortMovieFilter={shortMovieFilter}
                onShortMovieFilter={handleChangeShortMovie}

                isFirstLoadMovie={firstLoadMovie}
                onFirstLoadMovie={handleFirstLoadMovie}

                isPreloader={preloader}
                onPreloader={setPreloader}
                isLocation={isLocation}

                handleFindFilms={handleFindMovies}
                onHandlePopupOpen={handlePopupOpen}
                onHandleUpdateLike={handleUpdateLike}
              />
            </ProtectedRoute>
          }/>

          {<Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                isSaveMovieList={saveMovieList}
                isMovieFound={saveMovieFound}
                onMovieFound={setSaveMovieFound}
                isMovieSearchText={localStorage.saveMovieSearchText}
                isShortMovieFilter={shortSaveMovieFilter}
                onShortMovieFilter={setShortSaveMovieFilter}

                isFirstLoadMovie={firstLoadSaveMovie}
                onFirstLoadMovie={setFirstLoadSaveMovie}

                isPreloader={preloader}
                onPreloader={setPreloader}
                isLocation={isLocation}

                handleFindFilms={handleFindSaveMovies}
                onHandlePopupOpen={handlePopupOpen}
                onHandleUpdateLike={handleUpdateLike}
              />
            </ProtectedRoute>
          }/>}

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onSignOut={handleLogOut}
                onUpdateProfile={handleUpdateProfile}
              />
            </ProtectedRoute>
          }/>

          <Route path="/signup" element={
            <Register
              isLoggedIn={loggedIn}
              onNavigate={navigate}
              isLocation={isLocation}
              isButton={Constants.REG_BUTTON}
              onRegister={handleRegister}
              isEnterError={enterError}
            />}
          />
          <Route path="/signin" element={
            <Login
              isLoggedIn={loggedIn}
              onNavigate={navigate}
              isLocation={isLocation}
              isButton={Constants.ENTER_BUTTON}
              onLogin={handleLogin}
              isEnterError={enterError}
            />}
          />
          <Route path="/error" element={<Error/>}/>
          <Route path="/*" element={<Navigate to="/error"/>}/>

        </Routes>
        <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
        {Constants.FOOTER_VISIBLE_DISABLE.includes(isLocation) ? '' : <Footer/>}
      </div>}
    </CurrentUserContext.Provider>
  );
}

export default App;
