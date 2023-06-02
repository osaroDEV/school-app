import Nav from './Nav';
import Input from './Input';


const NavSearch = () => {
  return (
    <div className='bg-[#109cde]'>
      <div className='bg-[#019cde] h-[80px] w-full md:w-[20%] flex md:float-right justify-center items-center'>
        <Input />
        <Nav className='w-[20%] md:order-[1]' />
      </div>
    </div>
  );
};

export default NavSearch;
