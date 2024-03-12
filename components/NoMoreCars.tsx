"use client";
import React from 'react'
import Image from 'next/image';

export const NoMoreCars = () => {
  return (
    <div className='flex flex-col w-full pt-14 justify-center items-center'>
    
    <div className=' w-[375px] h[211px] '>
         <Image src="/desert-logo.png" alt="No More Cars" width={375} height={211} className='object-contain'/>   
    </div>
        <h2 className=' text-[25px] font-extrabold'>No more cars available</h2>
        <p>Try changing your filters or look for a different model</p>
    </div>
  )
}
