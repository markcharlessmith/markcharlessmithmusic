import React, { useState } from 'react';
import './gallery.css';
// import images from '../../App'
// import { images } from '../../data'

type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="gallery">
      <img src={images[currentImage]} alt="" />
      <div className="buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Gallery
