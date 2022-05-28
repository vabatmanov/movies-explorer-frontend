import './App.css';
import Header from "../Header/Header";
import Main from  "../Main/Main"
import SideMenu from "../SideMenu/SideMenu";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";

import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); //Пользователь вошел ?
  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню
  const [filmList, setFilmList] = useState([{card: 'name'}]); //список фильмов
  const [loading, setLoading] = useState(false); //список фильмов

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
      <Header loggedIn={loggedIn} onSideMenuOpen={handleSideMenuClicked}/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies filmList={filmList} isLoading={loading}/>} />
        <Route path="/saved-movies" element={<Movies/>} />
      </Routes>
      <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
      <Footer/>
    </div>
  );
}

export default App;
