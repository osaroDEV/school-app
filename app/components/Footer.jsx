import React from 'react';
import { MdSchool } from 'react-icons/md';
import FooterIcons from './FooterIcons';
import MoreLinks from './MoreLinks';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
      <FooterIcons />
      <section className='flex flex-col gap-[1rem] md:gap-[2rem] justify-center items-center'>
        <MdSchool className='bg-[transparent] text-[100px] md:text-8xl' />
        <div className='text-[#2D5267] flex flex-col gap-2 justify-center items-center'>
          <h1 className='font-bold text-2xl md:font-normal md:text-4xl'>
            LOREM IPSUM SCHOOLS
          </h1>
          <p className='text-xs md:text-2xl'>Knowledge and Morals</p>
        </div>
      </section>
      <section className='m-[0_5rem]'>
        <div>
          <p>Lorem Ipsum Schools</p>
          <p>8787 W. Ali Ave. LakeWood, Utopia 31256</p>
        </div>
        <div className='mt-[10px]'>
          <p className='text-[#2D5267]'><strong>Contact Us</strong></p>
          <p>303-278-8900</p>
        </div>
      </section>
      <MoreLinks />
      <section className='p-2 w-[80%] text-center font-semibold'>
        <p>Transforming students to impact the world positively.</p>
      </section>
      <hr className='border w-[90%] border-[#019cde]' />
      <section>
        <p className='text-sm text-[rgba(0,0,0,0.6)]'>
          &copy;2023 Lorem Ipsum Schools
        </p>
      </section>
    </div>
  );
};

export default Footer;
