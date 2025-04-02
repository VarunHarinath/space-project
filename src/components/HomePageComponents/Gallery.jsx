import React, { useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=3250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative max-w-screen-lg mx-auto p-5">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="w-full h-96 object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-md hover:bg-gray-900"
      >
        ▶
      </button>
    </div>
  );
};

export default Gallery;
