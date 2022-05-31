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
import React, {useEffect, useState} from "react";
import {Route, Routes, useLocation} from 'react-router-dom';


function App() {
  const [loggedIn, setLoggedIn] = useState(true); //Пользователь вошел ?
  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню
  const [filmList, setFilmList] = useState([{card: 'name'}]); //список фильмов
  const [loading, setLoading] = useState(false); //список фильмов

  const isLocation = useLocation().pathname;

  // Открывает боковое меню
  function handleSideMenuClicked() {
    setIsSideMenu(true);
  }

  //Закрыть все всплывающие окна
  function allWindowsClose() {
    setIsSideMenu(false);
  }

  return (
    <div className="App">
      {/*{loggedIn && <Header loggedIn={loggedIn}/>}*/}
      {Constants.HEADER_VISIBLE_DISABLE.includes(isLocation) ||
      <Header loggedIn={loggedIn} onSideMenuOpen={handleSideMenuClicked}/>}
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies filmList={filmList} isLoading={loading}/>} />
        <Route path="/saved-movies" element={<Movies filmList={filmList} isLoading={loading}/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/signup" element={<Register/>} />
        <Route path="/signin" element={<Login isLocation={isLocation}/>} />
        <Route path="/*" element={<Error/>} />

      </Routes>
      <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
      {Constants.FOOTER_VISIBLE_DISABLE.includes(isLocation) || <Footer/>}
    </div>
  );
}

export default App;
