import Image from 'next/image';
import Carousel from './components/Carousel';

const Home = () => {
  return (
    <main className=''>
      {/* <div className='border-y-4 border-[#f1c40f] flex justify-center'>
        <section className='w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1000px] xl:w-[1280px] 2xl:w-[1536px] h-[218px] sm:h-[372px] md:h-[446px] lg:h-[595px] xl:h[744px] 2xl:h-[893px] relative'>
          <Image src='/images/school.jpg' fill={true} alt='school building' />
        </section>
      </div> */}
      <div className='p-[48px_0]'>
        <section className='p-[0_24px]'>
          <h1 className='text-[32px] text-center'>Lorem Ipsum Schools</h1>
          <p className='text-center m-[32px_0]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptate illo nam, quod nisi voluptas tempore aut ab placeat
            veritatis minus amet ipsum officiis id eum repudiandae animi
            expedita velit harum libero. Expedita quidem eum, quod velit a sequi
            molestias praesentium at beatae corporis dignissimos excepturi
            facere saepe unde culpa exercitationem labore et eaque modi,
            suscipit placeat nemo? Delectus eos odit quasi perferendis mollitia
            obcaecati! Minus architecto maiores itaque est tempore. Fugiat,
            dicta vitae! Ipsa aut quos rem iusto est saepe consectetur eligendi
            doloremque? Possimus corporis repellat autem exercitationem
            inventore doloribus totam deserunt perspiciatis, cupiditate officia
            alias quisquam, temporibus similique!
          </p>
        </section>
        {/* <Carousel /> */}
      </div>
    </main>
  );
};

export default Home;
