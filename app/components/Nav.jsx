'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className='text-5xl bg-[#103356] text-white w-[20%] md:min-w-[84px] xl:w-0 h-full xl:h-0 flex justify-center items-center relative xl:hidden'>
        <div onClick={handleClick}>
          {isOpen ? (
            <FiX className='cursor-pointer' />
          ) : (
            <FiMenu className='cursor-pointer' />
          )}
        </div>
        {isOpen && (
          <ul className='flex flex-col justify-around items-center absolute w-[100vw] h-auto bg-[#103356] bottom-[-263px] left-[-400%] md:left-[-620px] md:w-[697px] lg:w-[512px] lg:left-[-410px]'>
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
    </>
  );
};

export default Nav;
