import Nav from './Nav';
import Input from './Input';
import Link from 'next/link';

const NavSearch = () => {
  return (
    <div className='bg-[#019cde] xl:bg-[#103356] xl:relative xl:flex xl:justify-center xl:py-2'>
      <div className='bg-[#019cde] h-[80px] xl:h-[60px] w-full md:w-[168px] xl:w-[80px] flex md:float-right justify-center items-center xl:absolute xl:bottom-[-60px] xl:right-0'>
        <Input />
        <Nav className='w-[20%] md:order-[1]' />
      </div>
      <nav className='hidden xl:block xl:w-[60%] margin-[0_auto]'>
        <ul className=' w-full h-full text-white flex flex-row justify-between'>
          <Link
            href='/'
            className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
          >
            <li>Home</li>
          </Link>
          <Link
            href='/about'
            className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
          >
            <li>About</li>
          </Link>
          <Link
            href='/academics'
            className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
          >
            <li>Academics</li>
          </Link>
          <Link
            href='/admissions'
            className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
          >
            <li>Admissions</li>
          </Link>
          <Link
            href='/campuslife'
            className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
          >
            <li>Campus Life</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavSearch;
