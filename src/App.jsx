import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Works from './components/Works';
import Portfolio from './components/Portfolio';
import Profil from './components/Profil';
import Formation from './components/Formation';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar/>
      <Cover />
      <Works />
      <Portfolio/>
      <Profil/>
      <Formation/>
      <Footer/>
      
    </div>
  );
}

export default App
