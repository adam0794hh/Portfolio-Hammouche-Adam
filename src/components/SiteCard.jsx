import React, { useState } from 'react'
import "../components/Portfolio.css"

function SiteCard({ title, description, image }) {
    const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  const paragraphs = description.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div
      className="site-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} />
      {showDescription && <div className='Portfolio-desc'>
        <h3>{title}</h3>
        {paragraphs}
        </div>}
    </div>
    
  )
}

export default SiteCard