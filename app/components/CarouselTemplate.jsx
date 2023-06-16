'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

const CarouselTemplate = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, interval]);

  return (
    <div className='border-y-4 border-[#f1c40f]'>
      <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
        <Image src={images[currentImageIndex]} fill={true} alt='' />
        <button
          onClick={previousImage}
          className='absolute left-[1rem] top-[50%] translate-y-[-50%] text-white text-4xl z-100'
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextImage}
          className='absolute right-[1rem] top-[50%] translate-y-[-50%] text-white text-4xl z-100'
        >
          <FiChevronRight />
        </button>
      </section>
    </div>
  );
};

export default CarouselTemplate;
