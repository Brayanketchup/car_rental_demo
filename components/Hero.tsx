"use client";

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='2xltext-[72px] smtext-[64px] text-[50px] font-extrabold'>
                    BOOK CAR HERE
                </h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    Find the perfect car for your needs. From luxury cars to economy class, we have got
                </p>

                <CustomButton
                    title="explore cars"
                    btnType='button'
                    containerStyles="bg-primary-blue text-white rounded-full p-2 mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='xlflex-[1.5] flex justify-end items-end w-full xlh-screen'>
                <div className='hero-img'>
                    <Image src="" alt="hero"
                        fill className='object-contain' />
                </div>
                <div className="hero-img-overlay" />
            </div>


        </div>
    )
}

export default Hero