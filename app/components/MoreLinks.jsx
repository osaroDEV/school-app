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
        <ul className='flex flex-col justify-around items-center absolute w-full h-auto bg-[#103356] top-[-220px] left-0'>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            About
          </li>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            Academics
          </li>
          <li className='indent-[.5rem] border-b border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            Admissions
          </li>
          <li className='indent-[.5rem] border-[#ffffaa] font-bold text-xl w-[90%] p-[.75rem_0]'>
            Campus Life
          </li>
        </ul>
      )}
    </div>
  );
};

export default MoreLinks;
