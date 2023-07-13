import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='bg-[#fff] h-[80px] md:h-[100px] flex items-center justify-center'>
      <Link
        href='/'
        className=' flex flex-row gap-[.5rem] md:gap-[2rem] justify-center items-center pr-[0.6rem] mr-1'
      >
        <Image src='/images/logo.jpg' width={100} height={100} alt='school logo' />
        <div className='text-[#2D5267]'>
          <h1 className='font-extrabold  md:text-4xl lg:tracking-wider'>
            LOREM IPSUM UNIVERSITY
          </h1>
          <p className='text-xs md:text-2xl'>Knowledge and Morals</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
