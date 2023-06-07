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
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            <Link href='/about'>About</Link>
          </li>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            <Link href='/academics'>Academics</Link>
          </li>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            <Link href='/admissions'>Admissions</Link>
          </li>
          <li className='indent-[.5rem] border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            <Link href='/campuslife'>Campus Life</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
