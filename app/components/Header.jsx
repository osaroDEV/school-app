import { MdSchool } from 'react-icons/md';

const Header = () => {
  return (
    <header className='bg-[#fafafa] h-[80px] md:h-[100px] flex flex-row gap-[1rem] md:gap-[2rem] items-center justify-center'>
      <MdSchool className='bg-[transparent] text-5xl md:text-8xl' />
      <div className='text-[#2D5267]'>
        <h1 className='font-bold md:font-normal md:text-4xl'>LOREM IPSUM SCHOOLS</h1>
        <p className='text-xs md:text-2xl'>Knowledge and Morals</p>
      </div>
    </header>
  );
};

export default Header;
