import CarouselTemplate from './CarouselTemplate';

const Carousel = () => {
  const slides = [
    {
      src: '/images/library.jpg',
      alt: 'library photo',
      header: 'OUR LIBRARY',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum?',
    },
    {
      src: '/images/classroom.jpg',
      alt: 'classroom photo',
      header: 'OUR CLASSROOM',
      para: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      src: '/images/school.jpg',
      alt: 'school photo',
      header: 'OUR SCHOOL BUILDING',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  return (
    <div className='container'>
      <CarouselTemplate slides={slides} interval={5000} />
    </div>
  );
};

export default Carousel;
