"use client";

import React from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import { useState } from 'react';
import  CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';


interface CarCardProps {
    car : CarProps
}

const CarCard = ( { car } : CarCardProps ) => {

    const { city_mpg, year, make, model, transmission, drive} = car;
    const [isOpen, setisOpen] = useState(false)

    const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='flex flex-col p-6 justify-center items-start text-black bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>
        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
                {make}{model}
            </h2>

        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
                {carRent}
            <span className='self-start text-[14px] font-semibold'>
                /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src="/hero.png" alt='car picture' fill priority/>
        </div>
        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gearShift.png" width={20} height={20} alt=''/>
                    <p className='text-[14px]'></p>
                    {transmission === 'a'? 'Automatic' : "Manual"}
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tireLogo.png" width={20} height={20} alt=''/>
                    <p className='text-[14px]'></p>
                    {drive.toUpperCase()}
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gasLogo.png" width={20} height={20} alt=''/>
                    <p className='text-[14px]'></p>
                    {city_mpg} MPG
                </div>
            </div>

            <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
                <CustomButton
                btnType='button'
                title='View More'
                containerStyles='w-full rounded-full py-[16px] bg-primary-blue'
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/rightArrow.png"
                handleClick={()=> setisOpen(true)}
                />

            </div>
        </div>


    </div>
  )
}

export default CarCard