import React from 'react'
import "../components/profil.css"

function Profil() {
  return (
    <section className='profil-content' id='Profil'>
        <div className='profil-container'>
            <div className='profil-row'>
                <div className='mon-profil'>
                    <h2>MON PROFIL</h2>
                    <p>Nom Hammouche</p>
                    <p>Prenom Adam</p>
                    <p>Telephone 06 52 46 10 29</p>
                    <p>Email ahammouche@hotmail.com</p>
                    <p> Site web </p>
                </div>
                <div className='competences'>
                    <h2>MES COMPETENCES</h2>
                    <div className='progress'>
                        <div className='skill-bar'>
                            <div>
                                <i className='fa fa-html5 fa-2x'></i>
                                HTML5
                            </div>
                            <i>95%</i>
                        </div>
                    </div>
                    <div className='progress'>
                        <div></div>
                    </div>
                    <div className='progress'>
                        <div></div>
                    </div>
                    <div className='progress'>
                        <div></div>
                    </div>
                    <div className='progress'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profil