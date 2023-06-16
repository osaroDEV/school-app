import CarouselTemplate from './CarouselTemplate';

const Carousel = () => {
  const images = [
    '/images/library.jpg',
    '/images/classroom.jpg',
    '/images/school.jpg',
  ];

  return (
    <div className='container'>
      <CarouselTemplate images={images} interval={5000} />
    </div>
  );
};

export default Carousel;
