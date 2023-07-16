import Image from 'next/image';
import { MdOutlineArrowRight } from 'react-icons/md';

const page = () => {
  return (
    <>
      <div>
        <div className='relative w-full' style={{ paddingBottom: '70.25%' }}>
          <Image
            src='/images/undergraduate-main.jpg'
            fill={true}
            alt='technician in the laboratory'
            quality={75}
            priority
          />
        </div>
        <div className='w-full bg-[#019cde] text-white p-[0.5rem] bottom-0'>
          <h2 className='text-[32px] pl-2'>College of Undergraduate Studies</h2>
        </div>
      </div>
      <section className='group flex justify-center items-center w-[80%] p-[5px] bg-[#019cde] m-[1rem_auto]'>
        <section className='flex justify-center items-center w-full bg-[#019cde]  border-2 border-white cursor-pointer group-hover:bg-[#39f] transition-all duration-200 ease-out'>
          <h2 className='uppercase text-center p-[10px_26px] font-bold text-white tracking-widest'>
            Request Info
          </h2>
          <MdOutlineArrowRight className='text-white text-4xl group-hover:translate-x-2  transition-all duration-200 ease-out' />
        </section>
      </section>
      <div className='p-[48px_0]'>
        <section className='p-[0_24px] md:p-[0_80px]'>
          <h1 className='text-[32px] font-bold'>
            Academic Programs in the College of Undergraduate Studies
          </h1>
          <p className=' m-[32px_0] leading-[1.75]'>
            Founded in 20XX, Lorem Ipsum University is a premier learning
            institute in Lorem and the Midlands region. Located in Lakewood,
            Utopia, a suburb of Atlantis, LIU delivers world-class education
            that transforms students to impact the world with grace and truth.
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
          <p className=' m-[32px_0] leading-[1.75]'>
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
