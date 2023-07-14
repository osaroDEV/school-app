import Image from 'next/image';
import Carousel from './components/Carousel';
import Events from './components/Events';
import YouTubeVideo from './components/YouTubeVideo';

const Home = () => {
  const videoId = 'e5Hc2B50Z7c';

  return (
    <>
      <div className='border-y-4 border-[#f1c40f] flex justify-center items-center'>
        <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
          <Image
            src='/images/school.jpg'
            fill={true}
            alt='school building'
            quality={75}
            priority
          />
        </div>
      </div>
      <div className='p-[48px_0]'>
        <section className='p-[0_24px] md:p-[0_80px] bg-[#fafafa]'>
          <h1 className='text-[32px] font-bold text-center'>
            Lorem Ipsum University
          </h1>
          <p className='text-center m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quae, optio perspiciatis exercitationem eaque esse modi. Odit quos, voluptas veritatis laudantium labore quisquam accusamus corrupti ut incidunt. Delectus sequi in repudiandae repellendus minima laudantium iure corrupti iste quas sapiente consequuntur esse provident, debitis non maxime nulla nemo eligendi quidem voluptatibus deserunt voluptatum. Possimus, expedita in commodi, odit maiores corporis dolores recusandae delectus reiciendis sapiente quod! Eveniet tempore similique doloribus at ea odio a. Deleniti nisi quisquam nulla suscipit.
          </p>
          <p className='text-center m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, maxime fuga. Praesentium dolores in beatae maxime aperiam autem saepe ipsa eveniet itaque sed aliquam facere numquam, blanditiis nobis perferendis suscipit odio enim ullam magni asperiores quidem nulla! Dolore nam nulla necessitatibus, voluptatum ad hic quos cumque adipisci quisquam veniam quod? Amet modi doloremque veritatis!
          </p>
        </section>
        <Carousel />
        <Events />
        <YouTubeVideo videoId={videoId} />
      </div>
    </>
  );
};

export default Home;
