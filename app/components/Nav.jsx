'use client';
import React, { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleClick}
      className='text-5xl bg-[#103356] text-white w-[20%] md:w-[50%] h-full flex justify-center items-center'
    >
      {isOpen ? <FiX /> : <FiMenu />}
    </div>
  );
};

export default Nav;
