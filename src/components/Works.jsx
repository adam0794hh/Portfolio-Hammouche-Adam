import React, { useEffect, useRef, useState } from 'react'
import "../components/works.css"
import WorkWrap from './WorkWrap'

function Works() {
  return (
    <section id='Works' className='works'>
        <div className='works-container'>
          <div className='works-presentation'>
            <div className='works-title'>
              <h2 className='title'> En quoi consiste MON TRAVAIL ?</h2>
            </div>
            <div className='works-row'>
              <WorkWrap
                title={"Développement de Sites Vitrines"}
                description={"Je crée des sites vitrines élégants avec des designs modernes et des fonctionnalités intuitives pour attirer et convertir vos visiteurs en clients."}
                icon={"fa-desktop"}
              />
              <WorkWrap
                title={"Applications E-commerce"}
                description={"Mon expertise en développement web me permet de concevoir des applications e-commerce conviviales et hautement performantes."}
                icon={"fa-shopping-cart"}
              />
              <WorkWrap
                title={"Applications Web & Mobiles"}
                description={"Je développe des applications web et mobiles qui s'adaptent à tous les supports : smartphones, tablettes et ordinateurs de bureau."}
                icon={"fa-mobile-alt"}
              />
              <WorkWrap
                title={"Engagement D'Accessibilité"}
                description={"L'accessibilité est une priorité. Je m'efforce de rendre vos applications accessibles à tous, y compris aux personnes en situation de handicap."}
                icon={"fa-universal-access"}
              />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Works