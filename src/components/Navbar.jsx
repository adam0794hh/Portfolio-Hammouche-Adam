import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../components/navbar.css"

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('Accueil')
    const [activeSection, setActiveSection] = useState('Accueil')

    const handleScroll = () => {
        const scrolly = window.scrollY;
        setShowNavbar(scrolly > 200);
        if (scrolly >= 0 && scrolly < 757) {
            setActiveSection('Accueil');
        }else if (scrolly >= 757 && scrolly < 1580) {
            setActiveSection('Mon Travail');
        } else if (scrolly >= 1616 && scrolly < 2291) {
            setActiveSection('Portfolio');
        } else if (scrolly >= 2392 && scrolly < 2940) {
            setActiveSection('Profil');
        } else if (scrolly >= 2940 && scrolly < 3209) {
            setActiveSection('Formation');
        } else if (scrolly >= 3209) {
            setActiveSection('Contact');
        }
        
    };
    
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprimer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (item, section) => {
        setActiveItem(item);
        setActiveSection(section); 
        setShowMenu(false);
    };
    const toggleNavbar = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };
    
  return (
    <div className={`navbar-default ${showNavbar ? 'show' : ''}`}>
        <div className='container'>
            <div className='row'>
                <div className='logo'>
                    <img src='/public/logo-HA.jpg'></img>
                </div>
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
                                className={`menu-items ${activeSection === 'Accueil' ? 'active' : ''}`} 
                                onClick={() => handleClick('Accueil','Accueil')}>Accueil</a>
                            </li>
                            <li>
                                <a href='#Works' 
                                className={`menu-items ${activeSection === 'Mon Travail' ? 'active' : ''}`} 
                                onClick={() => handleClick('Mon Travail','Mon Travail')}>Mon Travail</a>
                            </li>
                            <li>
                                <a href='#Portfolio' 
                                className={`menu-items ${activeSection === 'Portfolio' ? 'active' : ''}`} 
                                onClick={() => handleClick('Portfolio','Portfolio')}>Portfolio</a>
                            </li>
                            <li>
                                <a href='#Profil'
                                className={`menu-items ${activeSection === 'Profil' ? 'active' : ''}`} 
                                onClick={() => handleClick('Profil','Profil')}>Profil</a>
                            </li>
                            <li>
                                <a href='#Formation'
                                className={`menu-items ${activeSection === 'Formation' ? 'active' : ''}`} 
                                onClick={() => handleClick('Formation','Formation')}>Formation</a>
                            </li>
                            <li>
                                <a href='#Contact'
                                className={`menu-items ${activeSection === 'Contact' ? 'active' : ''}`} 
                                onClick={() => handleClick('Contact','Contact')}>Contact</a>
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