import React from 'react'
import "../components/cover.css"

function Cover () {
    return (
      <section id='Home' className='Cover'>
        <div className='intro'>
          <h1 className="scale-animation">Adam Hammouche</h1>
          <h2>Devloppeur Web</h2>
          <p>Je suis un développeur Front-End professionnel  qui crée des designs modernes
            et responsive pour le <br></br> web et le mobile</p>
          <a href='#Works' className='btn'>Commençons</a>
        </div>
      </section>
    );
  }

export default Cover