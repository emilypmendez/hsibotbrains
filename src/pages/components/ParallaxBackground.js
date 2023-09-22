// ParallaxBackground.js

import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(180deg, #007954 0%, #007954 50%, transparent 75%)`,
        backgroundPositionY: `${offsetY * 0.5}px`, // Adjust the speed of the parallax effect
        transition: 'background-position-y 0.3s ease-in-out', // Add a smooth transition
      }}
    />
  );
};

export default ParallaxBackground;
