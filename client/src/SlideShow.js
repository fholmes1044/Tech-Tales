
import React, { useState, useEffect } from 'react';
import "./styling/SlideShow.css"

const images = [
    'https://i.imgur.com/71FYj6a.png',
    'https://i.imgur.com/CmNe1lw.png',
    'https://i.imgur.com/GmS7JrU.png',
    'https://i.imgur.com/o3Q2q0G.png',
    'https://i.imgur.com/H8C4Rmg.png',
    
];

function Slideshow (){
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id= "slideshow">
      <button onClick={prevSlide} className="slideshowbutton">Previous</button>
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slide"
      />
      <button onClick={nextSlide} className="slideshowbutton">Next</button>
    </div>
  );
};

export default Slideshow;
