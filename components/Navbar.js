import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-[#364795] flex h-[80px] items-center p-6'>
      <div className={`flex-1 font-bold text-3xl`}>
        <div className="flex items-center">
          <Link href='/'>
            <img
              src='/mkhs.png'
              alt='MKHS Logo'
              className='cursor-pointer w-16 h-16 lg:w-20 lg:h-20'
            />
          </Link>
          <img
            src='/schoolname.png'
            alt='School Name'
            className='w-auto h-16 lg:h-20 ml-4'
          />
        </div>
      </div>

      <div className='hidden lg:flex lg:gap-2 text-lg font-semibold'>
        <Link href='/'>
          <span className={`${router.pathname == "/" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            About
          </span>
        </Link>
        <Link href='/Committee'>
          <span className={`${router.pathname == "/Committee" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Our Team
          </span>
        </Link>
        <Link href='/tuned'>
          <span className={`${router.pathname == "/tuned" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Gallery
          </span>
        </Link>
        <Link href='/'>
          <span className={`${router.pathname == "/tracks" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Activities
          </span>
        </Link>
        <span className={`text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2`}>
          <label tabIndex={0} className='hover:text-orange-400 m-1 relative text-white'>
            Campus
          </label>
          <div className='absolute top-[42px] -left-10 dropdown-content p-4'>
            <ul tabIndex={0} className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start">
              <Link href='/'>
                <li className={`${router.pathname == "/" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                  Classrooms
                </li>
              </Link>
              <Link href='/'>
                <li className={`${router.pathname == "/" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>
                  Playground
                </li>
              </Link>
              <Link href='/' scroll={false}>
                <li className={`${router.pathname == "/" ? "hover-border-orange-400 text-orange-400" : ""} hover-bg-orange-300 hover-text-black rounded-lg w-full text-left p-2`}>Computer Lab</li>
              </Link>
            </ul>
          </div>
        </span>
        <Link href='/tuned'>
          <span className={`${router.pathname == "/tuned" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover-border-orange-400`}>
            Academics
          </span>
        </Link>
        <Link href='/tuned'>
          <span className={`${router.pathname == "/tuned" ? "text-orange-400" : "text-white"} cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Achievements
          </span>
        </Link>
      </div>

      <span className='block lg:hidden' onClick={() => setIsOpenSidebar(prev => !prev)}>
        <GiHamburgerMenu className='w-6 h-6 text-white' />
      </span>
      <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
      </AnimatePresence>
    </div>
  )
}

export default Navbar;
