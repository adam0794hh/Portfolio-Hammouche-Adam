import React, { useEffect, useState } from 'react'
import "../components/navbar.css"

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleScroll = () => {
        const scrolly = window.scrollY;
        if (scrolly > 200) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprimer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
  return (
    <div className={`navbar-default ${showNavbar ? 'show' : ''}`}>
        <div className='container'>
            <div className='row'>
                <div>LOGO</div>
                <div>
                    <nav>
                        <ul className='nav-menu'>
                            <li>
                                <a href='#Home' className='menu-items'>Accueil</a>
                            </li>
                            <li>
                                <a href='#Works' className='menu-items'>Mon Travail</a>
                            </li>
                            <li>
                                <a className='menu-items'>Portfolio</a>
                            </li>
                            <li>
                                <a className='menu-items'>Profil</a>
                            </li>
                            <li>
                                <a className='menu-items'>A propos</a>
                            </li>
                            <li>
                                <a className='menu-items'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar