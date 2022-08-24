import Contacts from "./Contacts";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import { RiVideoAddFill } from "react-icons/ri";

const RightSidebar = () => {
  return (
    <div className='  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
      <div className='flex items-center text-gray-500'>
        <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
        <div className='flex space-x-1 px-2'>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <RiVideoAddFill />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <BiSearch />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name='Anthony Pena'
        src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600'
        status='online'
      />
      <Contacts
        name='Sukriya Shrestha'
        src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600'
        status='offline'
      />
      <Contacts
        name='Janam Shrestha'
        src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600'
        status='online'
      />
    </div>
  );
};

export default RightSidebar;
