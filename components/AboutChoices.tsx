import Link from 'next/link';
import React from 'react';

export const AboutChoices = () => {
  return (
    <div className='w-full text-center max-w-[700px] '>
            <h1 className='tittle-style'>Unlimited Choices</h1>
            <h3 className='subtitle-style'>Explore the most extensive car sharing platform globally</h3>
            <p className='pb-5'>From an SUV for a family vacation, a pickup for various tasks,
              or a luxury sports car for an exclusive evening, discover the ideal
              vehicle for every event and budget with us.</p>
            <Link
              href="/"
              className='mt-3 w-fit px-4 py-2 square-button'>
              Book The Perfect Car.
            </Link>
          </div>
          
  )
}
