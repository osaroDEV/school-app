'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className='border-y-4 border-[#f1c40f] flex justify-center items-center'>
        <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
          <Image src='/images/school.jpg' fill={true} alt='school building' />
        </section>
      </div>
      <div className='border-y-4 border-[#f1c40f] flex justify-center'>
        <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
          <Image src='/images/library.jpg' fill={true} alt='school building' />
        </section>
      </div>
      <div className='border-y-4 border-[#f1c40f] flex justify-center'>
        <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
          <Image
            src='/images/classroom.jpg'
            fill={true}
            alt='school building'
          />
        </section>
      </div>
    </Slider>
  );
};

export default Carousel;
