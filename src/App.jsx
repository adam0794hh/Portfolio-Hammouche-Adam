import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Profil from './components/Profil';

function App() {

  return (
    <>
      <Navbar/>
      <Cover />
      <Works />
      <Portfolio/>
      <Profil/>
      
    </>
  );
}

export default App
