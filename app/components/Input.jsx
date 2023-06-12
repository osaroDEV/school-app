'use client';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Input = () => {
  const [isNotTab, setIsNotTab] = useState(true);

  const handleClick = () => {
    setIsNotTab((prevState) => !prevState);
  };

  return (
    <div className='flex justify-center h-[50px] w-[80%] md:order-[2] md:max-w-[84px]'>
      <div className='h-full w-[70%] relative'>
        <input
          type='text'
          placeholder='SEARCH'
          className='h-full w-full outline-0 border-0 absolute pl-3 md:hidden'
        />
        <span
          className='hidden md:inline-block w-[23px] h-[30px] absolute right-4 md:left-[50%] bottom-[50%] translate-y-[50%] md:translate-x-[-50%] text-2xl md:text-4xl md:w-[41px] md:text-white'
          onClick={handleClick}
        ></span>
        <FiSearch className='absolute right-4 md:left-[50%] bottom-[50%] translate-y-[50%] md:translate-x-[-50%] text-2xl md:text-4xl md:w-full md:text-white md:cursor-pointer xl:text-[2rem] xl:font-bold' />
      </div>
      <button className='bg-[#103356] h-full w-[50px] font-bold text-white border-0 outline-0 md:hidden'>
        GO
      </button>
    </div>
  );
};

export default Input;
