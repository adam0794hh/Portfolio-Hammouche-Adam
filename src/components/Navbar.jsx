import React, { useEffect, useState } from 'react'
import "../components/navbar.css"

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [activeItem, setActiveItem] = useState('Accueil')

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

    const handleClick = (item) => {
        setActiveItem(item);
    }
    
  return (
    <div className={`navbar-default ${showNavbar ? 'show' : ''}`}>
        <div className='container'>
            <div className='row'>
                <div>LOGO</div>
                <div>
                    <nav>
                        <ul className='nav-menu'>
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
                                <a 
                                className={`menu-items ${activeItem === 'Profil' ? 'active' : ''}`} 
                                onClick={() => handleClick('Profil')}>Profil</a>
                            </li>
                            <li>
                                <a 
                                className={`menu-items ${activeItem === 'A propos' ? 'active' : ''}`} 
                                onClick={() => handleClick('A propos')}>A propos</a>
                            </li>
                            <li>
                                <a 
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