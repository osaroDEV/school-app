import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className='flex justify-center md:justify-evenly lg:justify-center flex-col flex-nowrap md:flex-row md:flex-wrap gap-7 items-center bg-[#7f8c8d] p-7 md:py-14'>
        <Link
          href='/'
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/pre-nursery.jpg'
            fill={true}
            alt='pre-nursery class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-100 ease-in-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(0,0,0,0.7)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>Undergraduate</h2>
          </div>
        </Link>
        <Link
          href='/'
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/nursery.jpg'
            fill={true}
            alt='nursery class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-100 ease-in-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(0,0,0,0.7)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>Adult Degree</h2>
          </div>
        </Link>
        <Link
          href='/'
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/primary.jpg'
            fill={true}
            alt='primary school class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-100 ease-in-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(0,0,0,0.7)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>Graduate</h2>
          </div>
        </Link>
        <Link
          href='/'
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/secondary.jpg'
            fill={true}
            alt='secondary school class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-100 ease-in-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(0,0,0,0.7)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>Dual Enrollment</h2>
          </div>
        </Link>
      </div>
      <div className='p-[48px_0]'>
        <section className='p-[0_24px] md:p-[0_80px]'>
          <h1 className='text-[32px] font-bold'>
            Where Knowledge and Morals Meet
          </h1>
          <p className='m-[32px_0] leading-[1.75]'>
            Founded in 20XX, Lorem Ipsum University is a premier learning institute
            in Lorem and the Midlands region. Located in Lakewood, Utopia, a
            suburb of Atlantis, LIS delivers world-class education that
            transforms students to impact the world with grace and truth.
            Expedita quidem eum, quod velit a sequi molestias praesentium at
            beatae corporis dignissimos excepturi facere saepe unde culpa
            exercitationem labore et eaque modi, suscipit placeat nemo? Delectus
            eos odit quasi perferendis mollitia obcaecati! Minus architecto
            maiores itaque est tempore. Fugiat, dicta vitae! Ipsa aut quos rem
            iusto est saepe consectetur eligendi doloremque? Possimus corporis
            repellat autem exercitationem inventore doloribus totam deserunt
            perspiciatis, cupiditate officia alias quisquam, temporibus
            similique!
          </p>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            incidunt nemo ullam, repellat animi amet. Qui ab eveniet recusandae
            eligendi id, quia harum autem nulla, magnam quibusdam mollitia,
            iusto reprehenderit cumque nihil assumenda quos architecto dicta
            saepe fugiat reiciendis laboriosam! Atque temporibus tenetur eveniet
            cumque ullam corporis dolore enim, modi iure nobis sit! Neque totam
            asperiores omnis architecto magnam reiciendis. Similique officia
            error minima perferendis iusto earum, inventore animi dicta
            voluptatum dignissimos quisquam sint nemo?
          </p>
        </section>
      </div>
    </>
  );
};

export default page;
