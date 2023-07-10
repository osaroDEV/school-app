import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className='flex justify-center md:justify-evenly flex-col flex-nowrap md:flex-row md:flex-wrap gap-7 items-center bg-[#7f8c8d] p-7 md:py-14'>
        <div className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'>
          <Image
            src='/images/pre-nursery.jpg'
            fill={true}
            alt='technician in the laboratory'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-2000 h-auto group-hover:h-full bg-[rgba(0,0,0,0.7)] text-white bottom-0 hover:pt-10'>
            <Link href='/'>
              <h2 className='text-[32px] text-center'>Pre-Nursery</h2>
            </Link>
          </div>
        </div>
        <div className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'>
          <Image
            src='/images/nursery.jpg'
            fill={true}
            alt='technician in the laboratory'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-2000 h-auto group-hover:h-full bg-[rgba(0,0,0,0.7)] text-white bottom-0 hover:pt-10'>
            <Link href='/'>
              <h2 className='text-[32px] text-center'>Nursery</h2>
            </Link>
          </div>
        </div>
        <div className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'>
          <Image
            src='/images/primary.jpg'
            fill={true}
            alt='technician in the laboratory'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-2000 h-auto group-hover:h-full bg-[rgba(0,0,0,0.7)] text-white bottom-0 hover:pt-10'>
            <Link href='/'>
              <h2 className='text-[32px] text-center'>Primary</h2>
            </Link>
          </div>
        </div>
        <div className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'>
          <Image
            src='/images/secondary.jpg'
            fill={true}
            alt='technician in the laboratory'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-2000 h-auto group-hover:h-full bg-[rgba(0,0,0,0.7)] text-white bottom-0 hover:pt-10'>
            <Link href='/'>
              <h2 className='text-[32px] text-center'>Secondary</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className='p-[48px_0]'>
        <section className='p-[0_24px]'>
          <h1 className='text-[32px] font-bold text-center'>
            Premier Learning Institute
          </h1>
          <p className='text-center m-[32px_0] leading-[1.75]'>
            Founded in 20XX, Lorem Ipsum Schools is a premier learning institute
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
          <p className='text-center m-[32px_0] leading-[1.75]'>
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
