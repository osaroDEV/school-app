'use client';
import Nav from './Nav';
import Input from './Input';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '../../links';

const NavSearch = () => {

  const pathname = usePathname();

  const allLinks = links.map((link) => {

    let isActive = pathname.endsWith(link.href);

    return (
      <Link
        href={link.href}
        key={link.id}
        className='font-bold xl:font-normal p-[.75rem_0] text-[18px] cursor-pointer'
      >
        <li className={isActive ? 'text-[#f1c40f]' : 'text-white hover:text-[#f1c40f] hover:ease-in duration-150'}>{link.name}</li>
      </Link>
    );
  });

  return (
    <div className='bg-[#019cde] xl:bg-[#103356] xl:relative xl:flex xl:justify-center xl:py-2'>
      <div className='bg-[#019cde] h-[80px] xl:h-[60px] w-full md:w-[168px] xl:w-[80px] flex md:float-right justify-center items-center xl:absolute xl:bottom-[-60px] xl:right-0'>
        <Input />
        <Nav className='w-[20%] md:order-[1]' />
      </div>
      <nav className='hidden xl:block xl:w-[60%] margin-[0_auto]'>
        <ul className=' w-full h-full text-white flex flex-row justify-between'>
          {allLinks}
        </ul>
      </nav>
    </div>
  );
};

export default NavSearch;
