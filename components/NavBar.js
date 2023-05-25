'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import '../app/globals.css'
import {
   AiOutlineMenu,
} from "react-icons/ai";
import ResNav from './ResNav';
import LargeNav from './LargeNav';


const NavBar = () => {
  const [open , setOpen] = useState(false);

  function handleNav() {
    setOpen(!open);
  }

  return (
    <>
      <nav className='nav pl-4 pr-4 sticky border-none'>
        <div className='nav-container'>
        <a href={"#"}>
        <span className='text-2xl tracking-widest border-2 border-white px-3'>Ahmed's Barbers</span>
        </a>
        <LargeNav />
        {open && <ResNav closeNav={handleNav} />}
        <div className="flex items-center gap-6 lg:hidden">
        <div className='block lg:hidden'>
            <button className='' onClick={handleNav}>
            <AiOutlineMenu className='text-3xl lg:hidden' />
            </button>
        </div>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;