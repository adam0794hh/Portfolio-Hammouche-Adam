import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../components/navbar.css"

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('Accueil')

    const handleScroll = () => {
        const scrolly = window.scrollY;
        setShowNavbar(scrolly > 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprimer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (item) => {
        setActiveItem(item);
        setShowMenu(false);
    }
    const toggleNavbar = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };
    
  return (
    <div className={`navbar-default ${showNavbar ? 'show' : ''}`}>
        <div className='container'>
            <div className='row'>
                <div>LOGO</div>
                <div>
                    <nav className='nav-flex'>
                        <div className="mobile-header">
                            <button className="menu-icon" onClick={toggleNavbar}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                        <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
                            <li>
                                <a href='#Home' 
                                className=
                                {`menu-items ${activeItem === 'Accueil' ? 'active' : ''}`} 
                                onClick={() => handleClick('Accueil')}>Accueil</a>
                            </li>
                            <li>
                                <a href='#Works' 
                                className={`menu-items ${activeItem === 'Mon Travail' ? 'active' : ''}`} 
                                onClick={() => handleClick('Mon Travail')}>Mon Travail</a>
                            </li>
                            <li>
                                <a href='#Portfolio' 
                                className={`menu-items ${activeItem === 'Portfolio' ? 'active' : ''}`} 
                                onClick={() => handleClick('Portfolio')}>Portfolio</a>
                            </li>
                            <li>
                                <a href='#Profil'
                                className={`menu-items ${activeItem === 'Profil' ? 'active' : ''}`} 
                                onClick={() => handleClick('Profil')}>Profil</a>
                            </li>
                            <li>
                                <a href='#Formation'
                                className={`menu-items ${activeItem === 'A propos' ? 'active' : ''}`} 
                                onClick={() => handleClick('A propos')}>Formation</a>
                            </li>
                            <li>
                                <a href='#Contact'
                                className={`menu-items ${activeItem === 'Contact' ? 'active' : ''}`} 
                                onClick={() => handleClick('Contact')}>Contact</a>
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