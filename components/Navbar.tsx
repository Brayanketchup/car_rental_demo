"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  
  //function to close the menu in case of screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false); // Set isOpen to false if desktop
        window.removeEventListener('resize', checkScreenSize); // Remove event listener
      }
    };
    // if isOpen add the event listener
    if (isOpen) {
      window.addEventListener('resize', checkScreenSize);
    }

    // Initially check if desktop
    checkScreenSize();

    // remove the event listener when isOpen is false
    return () => {
      if (isOpen) {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, [isOpen]); // use effect will run when isOpen change

  

  return (
    <header className='w-full absolute z-10'>
      {/* desktop */}

      <nav className='lg:flex hidden max-w-[1440px] md:mx-auto justify-between items-center sm:px-16 px-6 py-4'>
        <Link rel="" href="/">
          <Image src='/logo.png' alt='Car logo' width={50} height={50} className='object-contain' />
        </Link>

        <ul className='flex flex-row justify-center '>
          <li><Link 
          href='/' 
          className={`${(pathname === '/')? 'text-primary-color':' text-black' } 
          font-extrabold p-2 button-color-transition`}
          >Home</Link></li>

          <li><Link 
          href='/about' 
          className={`${(pathname === '/about')? 'text-primary-color':' text-black' } 
          font-extrabold p-2 button-color-transition`}
          >About</Link></li>

          <li><Link 
          href='/contact' 
          className={`${(pathname === '/contact')? 'text-primary-color':' text-black' } 
          font-extrabold p-2 button-color-transition`}
          >Contact</Link></li>
        </ul>

        <ul className='flex flex-row justify-end'>
          <li><button
            type='button'
            className='min-w-[130px] font-extrabold button-color-transition round-button '>
            Register
          </button></li>

          <li><button
            type='button'
            className='min-w-[130px] round-button bg-primary-color text-white button-shodow'>
            Login
          </button></li>
        </ul>
      </nav>


      {/* mobile */}
      <nav className=' lg:hidden justify-between'>
        <Link rel="" href="/">
          <Image src='/logo.png' alt='Car logo' width={50} height={50} className='object-contain m-2' />
        </Link>

        <button onClick={toggleMenu} className="flex flex-col gap-1 fixed top-5 right-5 z-50">
          <div className="rounded-full h-[3px] w-[20px] bg-black" />
          <div className="rounded-full h-[3px] w-[15px] bg-black" />
          <div className="rounded-full h-[3px] w-[25px] bg-black" />
        </button>

        <div className={`fixed flex items-center justify-center top-0 h-[100vh] w-[100vw] text-center bg-white transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 ' : 'translate-x-full'
          }`}>

          <ul className="flex flex-col-reverse gap-4 p-4">
            <li><Link href="/" className="flex justify-center items-center">
              <Image src="/logo.png" alt="Car logo" width={50} height={50} className="object-contain" />
            </Link></li>

            <div className='border-t border-gray-200'></div>

            <li><Link href="/" onClick={toggleMenu} className="min-w-[130px] font-extrabold button-color-transition">Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu} className="min-w-[130px] font-extrabold button-color-transition">About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className="min-w-[130px] font-extrabold button-color-transition">Contact</Link></li>

            <div className='border-t border-gray-200'></div>

            <li><Link href="/register" className="button-color-transition font-extrabold min-w-[130px]">Register</Link></li>
            <li> <Link href="/login" className="button-color-transition font-extrabold min-w-[130px]">Login</Link></li>
          </ul>
        </div>
      </nav>

    </header>
  )
}
