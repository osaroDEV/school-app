'use client';
import { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

const MoreLinks = () => {
  const [isMore, setIsMore] = useState(false);

  const handleClick = () => {
    setIsMore((prevState) => !prevState);
  };

  return (
    <div
      className='relative flex justify-between items-center w-[60%] h-[50px] bg-[#103356] text-[#F1c40F] p-5'
      onClick={handleClick}
    >
      <p>{isMore ? 'Less links' : 'More links'}</p>
      <MdOutlineNavigateNext className='text-[#f1c40f] text-2xl' />
      {isMore && (
        <ul className='flex flex-col justify-around items-center absolute w-full h-[600%] bg-[#103356] top-[-310px] left-0'>
          <li>
            <span className='font-bold text-2xl'>
              About
              <hr className='border-[#ffffaa] w-full' />
            </span>
          </li>
          <li>
            <span className='font-bold text-2xl'>
              Academics
              <hr className='border-[#ffffaa] w-full' />
            </span>
          </li>
          <li>
            <span className='font-bold text-2xl'>
              Admissions
              <hr className='border-[#ffffaa] w-full' />
            </span>
          </li>
          <li>
            <span className='font-bold text-2xl'>
              Campus Life
              <hr className='border-[#ffffaa] w-full' />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MoreLinks;
