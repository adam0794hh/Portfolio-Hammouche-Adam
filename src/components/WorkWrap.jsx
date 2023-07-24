import React from 'react'

function WorkWrap({ icon ,title, description }) {
  return (
    <div className='wrapper-container'>
        <div className='works-wrap'>
            <i className={`fas ${icon}`}></i>
            <h3 className='wrap-title'>{title}</h3>
            <hr></hr>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WorkWrap