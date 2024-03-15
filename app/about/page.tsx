import React from 'react'
import Image from 'next/image'
import { PlanCard } from '@/components'
import Link from 'next/link'

export default function about() {
  return (

    <>

      <div className=' relative inset-0 h-96 flex'>
        <div className='h-full bg-white opacity-30  w-full flex absolute z-[1]'> </div>
        <div className='bg-banner-bg bg-cover h-full w-full flex z-0'></div>

      </div>

      <section className='flex min-h-screen flex-col items-center justify-between  p-24 overflow-hidden '>

        <div className='text-center'>
          <h2 className='2xl:text-[30px] sm:text-[20px] text-[15px] font-semibold'>Plan your trip</h2>
          <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>Quick & easy car rental</h1>
          <div className=' w-full flex justify-center flex-wrap'>
            <PlanCard
            tittle='Choose a Vehicle'
            text='Explore our extensive selection of cars and
                Find the ideal vehicle to match your requirements.'
            imgLink='/orange-car-logo.png'
            />
            <PlanCard
            tittle='Speak with Our Team'
            text='Connect with our approachable and well-informed team members who
                are available to address any inquiries or issues you might have'
            imgLink='/orange-agent-logo.png'
            />
            <PlanCard
            tittle='Start Your Journey'
            text='Embark on your journey with confidence,
                whether you are cruising the highways or navigating city streets,
                with our diverse fleet of vehicles.'
            imgLink='/orange-traveling-logo.png'
            />
          </div>
        </div>

        <article className='flex flex-wrap mx-4 my-5 justify-center'>
          <div className='w-full lg:w-1/2 px-4 flex justify-center items-center '>

          <Image src={'/handing-keys.jpg'} height={550} width={450} alt='handing keys image' className=' object-contain shadow-orange-500   shadow-[30px_-30px_0px_-10px_rgba(0,0,0,0)]'/>

          </div>

          <div className='w-full lg:w-1/2 min-w-[420px] max-w-[517px] px-4 py-5'>
          <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>
          Why us?
          </h1>
          <h2 className=' text-lg font-extrabold pb-5'> Bypass Traditional Rental Desks</h2>
          <h2 className=' text-xl font-extrabold py-5'>Maximize Your Value</h2>
          <p>Explore a range of vehicles — from daily drivers to unique luxury cars — offering a superior and 
            more hassle-free experience compared to traditional car rental agencies. 
            Secure the ideal car for your price range, with rates beginning at $25 daily.</p>

          <h2 className=' text-xl font-extrabold py-5'>Hassle-Free Cancellation</h2>
          <p>Enjoy the freedom to cancel up to 24 hours before your trip begins for a complete refund. 
            We understand that plans can change, providing the flexibility needed when unexpected situations arise.</p>

          <h2 className=' text-xl font-extrabold py-5'>Flexible Delivery Solutions</h2>
          <p>Receive your rental directly to you or your destination. 
            Numerous hosts provide the option to deliver to specific locations or 
            well-known areas such as airports, train stations, and hotels, adding 
            convenience to your travel plans.</p>
          </div>
        </article>

        <div className=' w-full flex flex-col justify-center items-center my-5'>
          <span className=' h-1 w-28 bg-orange-500 rounded-xl m-1'></span>
          <span className=' h-1 w-28 bg-orange-500 rounded-xl m-1 -translate-x-1/2'></span>
        </div>

        <div className='w-full text-center max-w-[700px] '>
          <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>Unlimited Choices</h1>
          <h2 className='text-xl font-extrabold py-5'>Explore the most extensive car sharing platform globally</h2>
          <p className='pb-5'>From an SUV for a family vacation, a pickup for various tasks, 
            or a luxury sports car for an exclusive evening, discover the ideal 
            vehicle for every event and budget with us.</p>
          <Link 
          href="/"
          className='mt-3 w-fit inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 
           bg-orange-500 text-base font-medium text-white hover:bg-orange-700 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>
            Book The Perfect Car.
           </Link>
        </div>
      </section>


    </>


  )
}

