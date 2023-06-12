'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#f1c40f" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#f1c40f" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className='p-[1rem] w-[80vw] m-[0_auto]'>
      <Slider {...settings}>
        <div className='border-y-4 border-[#f1c40f] flex justify-center items-center'>
          <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
            <Image src='/images/school.jpg' fill={true} alt='school building' />
          </section>
        </div>
        <div className='border-y-4 border-[#f1c40f] flex justify-center'>
          <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
            <Image
              src='/images/library.jpg'
              fill={true}
              alt='school building'
            />
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
    </section>
  );
};

export default Carousel;
