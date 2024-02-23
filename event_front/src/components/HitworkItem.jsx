import React, { useState } from 'react';

const HitworkItem = ({ imgSrc, title, description }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imgStyle = {
    maxWidth: isHovered ? '120px' : '100px', // Adjust the sizes as needed
    maxHeight: isHovered ? '120px' : '100px',
    objectFit: 'cover',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="card text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imgSrc}
          className="card-img-top mx-auto mt-3"
          alt={title}
          style={imgStyle}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HitworkItem;
