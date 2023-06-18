import Link from 'next/link';

const Events = () => {
  return (
    <section className='p-[3rem_0] text-center bg-[#e9e9e9]'>
      <h2 className='text-[39px] pb-[24px]'>Events</h2>
      <div>
        <section className='p-[0_24px]'>
          <div className='flex items-center gap-5 mb-6'>
            <span className='w-[52px] h-[42px] flex flex-col font-bold ml-6'>
              <span className='bg-[#019cde] w-full h-[20px] text-white'>
                Jun
              </span>
              <span className='bg-[#fff] w-full h-[22px]'>20</span>
            </span>
            <section className='text-left'>
              <Link href='/' className='font-bold hover:underline'>
                <h2 className='text-[#143f6a]'>Lorem Ipsum Convocation</h2>
              </Link>
              <p className='text-[#252525]'>On a bright morning...</p>
            </section>
          </div>
          <div className='flex items-center gap-5 mb-4'>
            <span className='w-[52px] h-[42px] flex flex-col font-bold ml-6'>
              <span className='bg-[#019cde] w-full h-[20px] text-white'>
                Mar
              </span>
              <span className='bg-[#fff] w-full h-[22px]'>12-18</span>
            </span>
            <section className='text-left'>
              <Link href='/campuslife' className='font-bold hover:underline'>
                <h2 className='text-[#143f6a]'>Admission Open</h2>
              </Link>
              <p className='text-[#252525]'>The Management sends out...</p>
            </section>
          </div>
          <div className='flex items-center gap-5 mb-6'>
            <span className='w-[52px] h-[42px] flex flex-col font-bold ml-6'>
              <span className='bg-[#019cde] w-full h-[20px] text-white'>
                Apr
              </span>
              <span className='bg-[#fff] w-full h-[22px]'>17</span>
            </span>
            <section className='text-left'>
              <Link href='/academics' className='font-bold hover:underline'>
                <h2 className='text-[#143f6a]'>First Term Kick-off</h2>
              </Link>
              <p className='text-[#252525]'>A new term starts...</p>
            </section>
          </div>
          <div className='flex items-center gap-5 mb-6'>
            <span className='w-[52px] h-[42px] flex flex-col font-bold ml-6'>
              <span className='bg-[#019cde] w-full h-[20px] text-white'>
                Jun
              </span>
              <span className='bg-[#fff] w-full h-[22px]'>20</span>
            </span>
            <section className='text-left'>
              <Link href='/about' className='font-bold hover:underline'>
                <h2 className='text-[#143f6a]'>Term Ends</h2>
              </Link>
              <p className='text-[#252525]'>Wrapping up the term...</p>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Events;
