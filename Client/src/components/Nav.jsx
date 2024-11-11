import React from 'react';
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="fixed border-[1px] bg-white border-black bottom-0 left-0 w-full py-3  rounded-t-2xl shadow-lg z-10">
        <ul className="flex justify-around items-center text-black">
          <li className="flex flex-col items-center hover:text-blue-700 transition">
            <Link to="/Help">
              <FaHandsHelping className="text-2xl" />
            </Link>
            <Link to="/Help" className="mt-1 text-sm">Help</Link>
          </li>
          <li className="flex flex-col items-center hover:text-blue-700 transition">
            <Link to="/Test">
              <IoIosPaper className="text-2xl" />
            </Link>
            <Link to="/Test" className="mt-1 text-sm">Test</Link>
          </li>
          <li className="flex flex-col items-center hover:text-blue-700 transition">
            <Link to="/">
              <FaHome className="text-2xl" />
            </Link>
            <Link to="/" className="mt-1 text-sm">Home</Link>
          </li>
          <li className="flex flex-col items-center hover:text-blue-700 transition">
            <Link to="/Notes">
              <RiFilePaper2Fill className="text-2xl" />
            </Link>
            <Link to="/Notes" className="mt-1 text-sm">Notes</Link>
          </li>
          <li className="flex flex-col items-center hover:text-blue-700 transition">
            <Link to="/Profile">
              <RiAccountCircleFill className="text-2xl" />
            </Link>
            <Link to="/Profile" className="mt-1 text-sm">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;