import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const FooterIcons = () => {
  return (
    <section className='mt-[50px] w-full flex justify-center gap-5'>
      <span className='flex justify-center items-center w-[40px] h-[40px] bg-[#103356] rounded-[50%]'>
        <BsInstagram className='text-white' />
      </span>
      <span className='flex justify-center items-center w-[40px] h-[40px] bg-[#103356] rounded-[50%]'>
        <FaFacebookF className='text-white' />
      </span>
      <span className='flex justify-center items-center w-[40px] h-[40px] bg-[#103356] rounded-[50%]'>
        <BsTwitter className='text-white' />
      </span>
      <span className='flex justify-center items-center w-[40px] h-[40px] bg-[#103356] rounded-[50%]'>
        <BsYoutube className='text-white' />
      </span>
      <span className='flex justify-center items-center w-[40px] h-[40px] bg-[#103356] rounded-[50%]'>
        <FaLinkedinIn className='text-white' />
      </span>
    </section>
  );
};

export default FooterIcons;
