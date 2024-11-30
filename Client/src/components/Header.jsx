import React, { useState } from 'react';
import profile from './../assets/profile.webp';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useAuth } from './../Context/Authcontext';

const Header = () => {
  const { user, isSignedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Debug user data safely
  console.log(user?.name);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Loading or no user state
  if (!user) {
    return (
      <header className='flex fixed z-10 top-0 justify-center bg-gray-100 w-full h-20 border-b-[1px] py-2 px-3'>
        <p className='text-black font-medium'>Loading...</p>
      </header>
    );
  }

  return (
    <>
      <header className='flex fixed z-10 top-0 justify-between bg-white w-full h-20 border-b-[1px] py-2 px-3 border-gray-400 text-white'>
        <div className='flex gap-4 items-center'>
          <div className='overflow-hidden h-16 w-16 rounded-full border-2 border-gray-300'>
            <img src={profile} alt="Profile" className='h-full w-full object-cover' />
          </div>
          <div>
            <h1 className='font-semibold text-black text-lg'>{user.name}</h1>
            <h1 className='font-medium text-black'>{user.class}th Class</h1>
          </div>
        </div>

        {/* Menu Icon to open sidebar */}
        <div className='py-4'>
          <RiMenu3Line className='text-3xl cursor-pointer text-black' onClick={toggleSidebar} />
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-indigo-700 text-white shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header with Close Icon */}
        <div className='flex justify-between items-center p-4 border-b border-indigo-500'>
          <h2 className='font-semibold text-lg'>Menu</h2>
          <RiCloseLine className='text-2xl cursor-pointer' onClick={toggleSidebar} />
        </div>

        {/* Sidebar Links */}
        <ul className='flex flex-col p-4'>
          <li className='p-2 hover:bg-indigo-600 rounded-md cursor-pointer'>Home</li>
          <li className='p-2 hover:bg-indigo-600 rounded-md cursor-pointer'>Profile</li>
          <li className='p-2 hover:bg-indigo-600 rounded-md cursor-pointer'>Social</li>
          <li className='p-2 hover:bg-indigo-600 rounded-md cursor-pointer'>Settings</li>
          <li className='p-2 hover:bg-indigo-600 rounded-md cursor-pointer'>Log Out</li>
        </ul>
      </div>

      {/* Overlay for sidebar close */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Header;