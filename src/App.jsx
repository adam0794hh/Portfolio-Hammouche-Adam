import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Works from './components/Works';

function App() {
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  // Ajoutez d'autres références pour les autres sections ici

  const [activeSection, setActiveSection] = useState('Accueil');

  useEffect(() => {
    const handleScroll = () => {
      const scrolly = window.scrollY;
      const homeTop = homeRef.current.offsetTop;
      const worksTop = worksRef.current.offsetTop;
      // Calculez la position de chaque section ici

      // Déterminez quelle section est actuellement visible en fonction de la position du défilement
      if (scrolly >= homeTop && scrolly < worksTop) {
        setActiveSection('Accueil');
      } else if (scrolly >= worksTop) {
        setActiveSection('MonTravail');
      }
      // Ajoutez des conditions pour les autres sections ici
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage : supprimer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeItem={activeSection} />
      <div ref={homeRef}>
        <Cover />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
    </>
  );
}

export default App
