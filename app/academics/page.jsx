import Image from 'next/image';
import Link from 'next/link';

const page = () => {

  const prefix = '/academics'

  return (
    <>
      <div className='flex justify-center md:justify-evenly lg:justify-center flex-col flex-nowrap md:flex-row md:flex-wrap gap-7 items-center bg-[#aaa] p-7 md:py-14'>
        <Link
          href={`${prefix}/undergraduate`}
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/undergraduate.jpg'
            fill={true}
            alt='pre-nursery class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-200 ease-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(20,63,106,0.8)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>
              Undergraduate
            </h2>
          </div>
        </Link>
        <Link
          href={`${prefix}/adult-degree`}
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/adult.jpg'
            fill={true}
            alt='nursery class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-200 ease-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(20,63,106,0.8)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>
              Adult Degree
            </h2>
          </div>
        </Link>
        <Link
          href={`${prefix}/graduate`}
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/graduate.jpg'
            fill={true}
            alt='primary school class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-200 ease-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(20,63,106,0.8)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>Graduate</h2>
          </div>
        </Link>
        <Link
          href={`${prefix}/dual-enrollment`}
          className='group relative w-full md:w-[40%] pb-[56.25%] md:pb-[35%] lg:pb-[25%]'
        >
          <Image
            src='/images/dual-enrollment.jpg'
            fill={true}
            alt='secondary school class photo'
            quality={75}
            priority
          />
          <div className='absolute w-full transition-all duration-200 ease-out h-[50px] group-hover:h-full group-hover:p-10 bg-[rgba(20,63,106,0.8)] text-white bottom-0'>
            <h2 className='text-[24px] sm:text-[32px] text-center'>
              Dual Enrollment
            </h2>
          </div>
        </Link>
      </div>
      <div className='p-[48px_0]'>
        <section className='p-[0_24px] md:p-[0_80px]'>
          <h1 className='text-[32px] font-bold'>
            Where Knowledge and Morals Meet
          </h1>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic nemo nihil corrupti veritatis ratione numquam provident voluptate error praesentium soluta, consectetur, voluptas dolor maiores facere, vel earum? Nemo iusto placeat omnis consequuntur necessitatibus assumenda ipsam aspernatur blanditiis enim quidem voluptas temporibus esse officiis molestiae, sed earum sequi natus..
          </p>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque rerum eius architecto fuga dignissimos, eum nostrum sint blanditiis repudiandae quod necessitatibus ex recusandae fugit id in voluptatum maxime quam aperiam ipsam laboriosam vel, quidem animi quo. Placeat commodi earum exercitationem possimus sequi praesentium optio excepturi minus iure, perspiciatis unde iusto dolore nisi cumque reiciendis repellendus vel laborum, eum ipsam, assumenda iste.
          </p>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint at explicabo, nihil labore, illo, voluptatibus possimus facilis nostrum sunt esse fugiat omnis. Mollitia commodi iusto, dolore fugit sit vel animi quidem debitis consectetur! Ducimus doloremque recusandae sapiente exercitationem impedit ab, consectetur labore maiores veniam deleniti! Obcaecati iste qui minima cumque odit eum placeat ipsa nihil repellat.
          </p>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque necessitatibus quae ratione, sapiente facilis sequi temporibus dolorum consequuntur ea tenetur perspiciatis nostrum blanditiis delectus maiores iste nesciunt eaque accusantium. In exercitationem, pariatur aliquid quis et sequi beatae nihil consectetur sed dolor quae nostrum. Quo accusamus eaque, eius maiores ipsa odit impedit tempore quos nam.
          </p>
          <p className='m-[32px_0] leading-[1.75]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor laudantium eaque reiciendis. Expedita unde, suscipit omnis corrupti eaque nobis non rerum cumque, provident voluptatum pariatur recusandae porro eos accusantium at tempore sunt. Suscipit repellendus assumenda obcaecati iste atque, repellat itaque perspiciatis deleniti. Nihil, veritatis quas.
          </p>
        </section>
      </div>
    </>
  );
};

export default page;
