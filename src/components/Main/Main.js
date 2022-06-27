import React, {useState, useLayoutEffect} from 'react';
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import {useWindowSize} from "../../hooks/useWindowsSize";

function Main() {
  //начало куска удаления
  const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const width = useWindowSize();
  const count = 0;
  const addCount = 0;

  switch(true) {
    case (width >= 900):
      count(12);
      addCount(3);
      break;
    case (width >= 400 && width < 900):
      count(8);
      addCount(2);
      break;
    default:
      addCount(5);
      count(5)
  }
  let i = count;
  while ( i <= count )



  //конец куска удаления


  return (
    <main className='main'>
      {/*начало куска который нужно удалить*/}
      <span>Window size: {width}</span>
      {/*конец куска который нужно удалить*/}
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
}

export default Main;
