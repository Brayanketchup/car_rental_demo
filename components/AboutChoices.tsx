import Link from 'next/link';
import React from 'react';

export const AboutChoices = () => {
  return (
    <div className='w-full text-center max-w-[700px] '>
            <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>Unlimited Choices</h1>
            <h2 className='text-xl font-extrabold py-5'>Explore the most extensive car sharing platform globally</h2>
            <p className='pb-5'>From an SUV for a family vacation, a pickup for various tasks,
              or a luxury sports car for an exclusive evening, discover the ideal
              vehicle for every event and budget with us.</p>
            <Link
              href="/"
              className='mt-3 w-fit inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
           bg-primary-color text-base font-medium text-white hover:bg-orange-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
              Book The Perfect Car.
            </Link>
          </div>
  )
}
