import React from 'react'
import "../components/profil.css"

function Profil() {
  return (
    <section className='profil-content' id='Profil'>
        <div className='profil-container'>
            <div className='profil-row'>
                <div className='mon-profil'>
                    <h2>MON PROFIL</h2>
                    <p>
                        <span className='info-label'>Nom</span>
                        Adam Hammouche
                    </p>
                    <p>
                        <span className='info-label'>Téléphone</span>
                        06 52 46 10 29
                    </p>
                    <p>
                        <span className='info-label'>Email</span>
                        ahammouche@hotmail.com
                    </p>
                    <div className='repo-github'>
                        <span className='info-label'>Repo github:</span>
                        <ul className='repo-list'>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/Hammouche_Adam_2_code_112022.git'><li>Projet Booki</li></a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/OC-Project-Oh-my-food.git'><li>Projet Oh my food</li></a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/ninacarducci.github.io-main.git'><li>Projet Nina Carducci</li></a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/kasa.git'><li>Projet Kasa</li></a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/adam0794hh/ProjetPrintit.git'><li>Projet Print it</li></a>
                        </ul>
                    </div>

                </div>
                <div className='competences'>
                    <h2>MES COMPETENCES</h2>
                    <div className='progress'>
                        <div className='skill-bar'>
                            <div className='flex'>
                                <i className='fa fa-html5 fa-2x'></i>
                                HTML5
                            </div>
                            <i className='rate'>95%</i>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='skill-bar-c'>
                            <div className='flex'>
                                <i className='fa fa-css3 fa-2x'></i>
                                CSS
                            </div>
                            <i className='rate'>95%</i>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='skill-bar-j'>
                            <div className='flex'> 
                                <i className='fab fa-js fa-2x'></i>
                                JAVASCRIPT
                            </div>
                            <i className='rate'>70%</i>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='skill-bar-r'>
                            <div className='flex'>
                                <i className="fa-brands fa-react fa-2x"></i>
                                REACT
                            </div>
                            <i className='rate'>70%</i>
                        </div>
                    </div>
                    <div className='progress'>
                        <div className='skill-bar-w'>
                            <div className='flex'>
                                <i className='fa fa-wordpress fa-2x'></i>
                                WORDPRESS
                            </div>
                            <i className='rate'>70%</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profil