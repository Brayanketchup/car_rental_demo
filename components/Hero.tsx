"use client";

import React from 'react';
import Image from 'next/image';

export const Hero = () => {

    return (
        <div className='hero'>
            <div className='flex-1 pt-24 px-6'>
                <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
                    <span className="text-primary-color">Looking</span> to rent a car
                </h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    Find the perfect car for your needs. From luxury cars to economy class, Unbeatable prices, unlimited miles, and much more.
                </p>

                <a
                    href='#Cars'
                    className='inline-flex flex-row relative justify-center items-center py-3 px-6 outline-none bg-primary-color text-white rounded-full p-2 mt-10 button-shodow'>
                    <span className='flex flex-row text-center items-center'>
                        Explore cars
                    </span>
                </a>

            </div>
            <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
                <div className='hero-img'>
                    <Image src="/hero.png" alt="hero"
                        fill className='object-contain' />
                </div>
            </div>
        </div>
    )
}
