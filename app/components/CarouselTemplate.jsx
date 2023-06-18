'use client';

import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

const CarouselTemplate = ({ slides, interval }) => {
  const [index, setIndex] = useState(0);

  const addIndex = () => {
    return setIndex((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const subIndex = () => {
    return setIndex((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(() => {
    const autoSlide = setInterval(addIndex, interval);
    return () => {
      clearInterval(autoSlide);
    };
  }, [index]);

  return (
    <div className='w-full flex flex-col justify-center items-center lg:relative'>
      <div className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1516px] bg-[#103356] h-[130px] lg:hidden'>
      </div>
      <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1516px] h-[180px] sm:h-[372px] md:h-[385px] lg:h-[480px] xl:h[480px] 2xl:h-[893px] relative'>
        <Image src={slides[index].src} fill={true} alt={slides[index].alt} />
        <button
          onClick={subIndex}
          className='absolute left-[.75rem] top-[50%] translate-y-[-50%] text-white text-4xl z-100'
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={addIndex}
          className='absolute right-[.75rem] top-[50%] translate-y-[-50%] text-white text-4xl z-100'
        >
          <FiChevronRight />
        </button>
      </section>
      <div className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1516px] bg-[#103356] lg:bg-[rgba(0,0,0,0.7)]  text-center text-white p-[1.5rem] lg:absolute lg:z-100 lg:bottom-[50px]'>
        <span className='border-l-4 border-[#f1c40f] text-[26px] pl-2'>
          {slides[index].header}
        </span>
        <p className='pt-4'>{slides[index].para}</p>
      </div>
    </div>
  );
};

export default CarouselTemplate;
