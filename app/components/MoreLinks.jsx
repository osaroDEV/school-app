'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdOutlineNavigateNext } from 'react-icons/md';

const MoreLinks = () => {
  const [isMore, setIsMore] = useState(false);

  const handleClick = () => {
    setIsMore((prevState) => !prevState);
  };

  return (
    <>
      <div
        className='relative flex justify-between items-center w-[60%] md:w-[90%] h-[50px] bg-[#103356] text-[#F1c40F] p-5 lg:w-[33%] cursor-pointer lg:hidden'
        onClick={handleClick}
      >
        <p>{isMore ? 'Less links' : 'More links'}</p>
        <MdOutlineNavigateNext className='text-[#f1c40f] text-2xl' />
        {isMore && (
          <ul className='flex flex-col justify-around items-center absolute w-full h-auto bg-[#103356] top-[-265px] left-0'>
            <Link
              href='/'
              className='border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'
            >
              <li className='indent-[.5rem]'>Home</li>
            </Link>
            <Link
              href='/about'
              className='border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'
            >
              <li className='indent-[.5rem]'>About</li>
            </Link>
            <Link
              href='/academics'
              className='border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'
            >
              <li className='indent-[.5rem] '>Academics</li>
            </Link>
            <Link
              href='/admissions'
              className='border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'
            >
              <li className='indent-[.5rem]'>Admissions</li>
            </Link>
            <Link
              href='/campuslife'
              className='border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'
            >
              <li className='indent-[.5rem]'>Campus Life</li>
            </Link>
          </ul>
        )}
      </div>
      <ul className='hidden flex-col w-[33%] h-auto text-[#2d5267] lg:flex lg:pl-14'>
        <Link
          href='/'
          className='font-bold p-[.75rem_0] text-[18px]'
        >
          <li>Home</li>
        </Link>
        <Link
          href='/about'
          className='font-bold p-[.75rem_0] text-[18px]'
        >
          <li>About</li>
        </Link>
        <Link
          href='/academics'
          className='font-bold p-[.75rem_0] text-[18px]'
        >
          <li >Academics</li>
        </Link>
        <Link
          href='/admissions'
          className='font-bold p-[.75rem_0] text-[18px]'
        >
          <li>Admissions</li>
        </Link>
        <Link
          href='/campuslife'
          className='font-bold p-[.75rem_0] text-[18px]'
        >
          <li>Campus Life</li>
        </Link>
      </ul>
    </>
  );
};

export default MoreLinks;
