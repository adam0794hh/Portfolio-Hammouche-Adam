import React from 'react'
import "../components/footer.css"

export default function Footer() {
  return (
    <section id='Contact' className='contact'>
      <div className='contact-container'>
        <div className='contact-details'>
            <div className='contact-title'>
              <h2>Me contacter ici</h2>
            </div>
            <div className='contact-email'>
              <a href='mailto:ahammouche@hotmail.com'>
                <img className='email-icon' src='/email.png'></img>
              </a>
            </div>
            <p>© 2023 Adam HAMMOUCHE, Tous droits réservés.</p>
        </div>
      </div>
    </section>
  )
}
