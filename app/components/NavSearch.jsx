import Nav from './Nav';
import { FiSearch } from 'react-icons/fi';

const NavSearch = () => {
  return (
    <div className='bg-[#019cde] h-[80px] w-full flex justify-center items-center'>
      <div className='flex justify-center h-[50px] w-[80%]'>
        <div className='h-full w-[185px] relative'>
          <input
            type='text'
            placeholder='SEARCH'
            className='h-full w-full outline-0 border-0 absolute pl-3'
          />
          <FiSearch className='absolute right-4 bottom-[50%] translate-y-[50%] text-2xl' />
        </div>
        <button className='bg-[#103356] h-full w-[50px] font-bold text-white border-0 outline-0'>
          GO
        </button>
      </div>
      <Nav className='w-[20%]' />
    </div>
  );
};

export default NavSearch;
