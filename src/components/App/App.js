import './App.css';
import Header from "../Header/Header";
import Main from  "../Main/Main"
import SideMenu from "../SideMenu/SideMenu";

import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); //Пользователь вошел ?
  const [isSideMenu, setIsSideMenu] = useState(false); //статус богового меню

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
        <Route path="/movie" element={<Main/>} />
      </Routes>
      <SideMenu isOpen={isSideMenu} onClose={allWindowsClose}/>
    </div>
  );
}

export default App;
