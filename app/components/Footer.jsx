import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterIcons from './FooterIcons';
import MoreLinks from './MoreLinks';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px] bg-[#fff]'>
      <hr className='hidden lg:block border w-[90%] border-[#019cde] mt-16' />
      <FooterIcons />
      <div className='flex flex-col lg:flex-row lg:w-[90%] justify-center items-center gap-[50px] lg:p-[0_5rem]'>
        <Link
          href='/'
          className='flex flex-col justify-center items-center lg:order-2 lg:w-[33%]'
        >
          <Image
            src='/images/logo.jpg'
            width={130}
            height={130}
            alt='school logo'
          />
          <div className='text-[#2D5267] flex flex-col gap-2 justify-center items-center'>
            <h1 className='font-extrabold lg:tracking-wider'>
              LOREM IPSUM SCHOOLS
            </h1>
            <p className='text-xs'>Knowledge and Morals</p>
          </div>
        </Link>
        <section className='flex flex-col justify-center m-[0_5rem] lg:m-[0_auto] lg:order-3 lg:w-[33%] lg:pl-10'>
          <div>
            <p>Lorem Ipsum Schools</p>
            <p>8787 W. Ali Ave. LakeWood, Utopia 31256</p>
          </div>
          <div className='mt-[10px]'>
            <p className='text-[#2D5267]'>
              <strong>Contact Us</strong>
            </p>
            <p>303-278-8900</p>
          </div>
        </section>
        <MoreLinks className='lg:w-[33%]' />
      </div>
      <section className='p-2 w-[80%] text-center font-semibold'>
        <p>Transforming students to impact the world positively.</p>
      </section>
      <hr className='border w-[90%] border-[#019cde]' />
      <section>
        <p className='text-sm text-[rgba(0,0,0,0.6)] mb-16'>
          &copy;2023 Lorem Ipsum Schools
        </p>
      </section>
    </div>
  );
};

export default Footer;
