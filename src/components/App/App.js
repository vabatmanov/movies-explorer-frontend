import './App.css';
import Header from "../Header/Header";
import Main from  "../Main/Main"

import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); //Пользователь вошел ?

  return (
    <div className="App">
      {/*{loggedIn && <Header loggedIn={loggedIn}/>}*/}
      <Header loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movie" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
