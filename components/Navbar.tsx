import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { CustomButton} from '@/components';




const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <link rel="" href="/" className='flex justify-center items-center' />
                <Image src='/logo.png' alt='Car logo' width={118} height={18} className='object-contain'>
                </Image>
                <CustomButton title="Login" btnType="button" containerStyles='text-primarly-blue rounded-full bg-white min-2-[130px]'/>
        </nav>
        
    </header>
  )
}

export default Navbar