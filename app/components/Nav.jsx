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
    <div
      onClick={handleClick}
      className='text-5xl bg-[#103356] text-white w-[20%] md:w-[50%] h-full flex justify-center items-center relative'
    >
      {isOpen ? <FiX /> : <FiMenu />}
      {isOpen && (
        <ul className='flex flex-col justify-around items-center absolute w-[100vw] h-auto bg-[#103356] bottom-[-260px] left-[-400%]'>
          <Link href='/'>
            <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
              Home
            </li>
          </Link>
          <Link href='/about'>
            <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
              About
            </li>
          </Link>
          <Link href='/academics'>
            <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
              Academics
            </li>
          </Link>
          <Link href='/admissions'>
            <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
              Admissions
            </li>
          </Link>
          <Link href='/campuslife'>
            <li className='indent-[.5rem] border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
              Campus Life
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Nav;
