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
        <ul className=' absolute w-full h-[800%] bg-[#103356] top-[-410px] left-0'>
          <li>bjhk</li>
          <hr className='border-[#f1c40f] w-[90%]' />
          <li>sdsd</li>
          <li>fvf</li>
          <li>fvfs</li>
          <li>vfs</li>
          <li>vfsv</li>
          <li>vfs</li>
          <li>fvsf</li>
        </ul>
      )}
    </div>
  );
};

export default MoreLinks;
