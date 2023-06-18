import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = () => {
  return (
    <section className='w-full md:w-[40px] flex md:flex-col fixed bottom-0 md:right-0 md:bottom-[10%]'>
      <span className='flex justify-center items-center w-[25%] md:w-full h-[40px] bg-[#3b5998]'>
        <FaFacebookF className='text-white text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] md:w-full h-[40px] bg-[#1da1f2]'>
        <BsTwitter className='text-white text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] md:w-full h-[40px] bg-[#7f8c8d]'>
        <FaLinkedinIn className='text-white text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] md:w-full h-[40px] bg-[#f1c40f]'>
        <MdEmail className='text-white text-3xl' />
      </span>
    </section>
  );
};

export default Socials;
