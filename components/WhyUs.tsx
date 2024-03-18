import Image from 'next/image'
import React from 'react';

export const WhyUs = () => {
  return (
    <div className='flex flex-wrap mx-4 my-5 justify-center'>
    <div className='w-full lg:w-1/2 px-4 flex justify-center items-center '>

      <Image src={'/handing-keys.jpg'} height={550} width={450} alt='handing keys image' className=' object-contain shadow-orange-500   shadow-[30px_-30px_0px_-10px_rgba(0,0,0,0)]' />

    </div>

    <div className='w-full lg:w-1/2 min-w-[420px] max-w-[517px] px-4 py-5'>
      <h1 className='tittle-style'>
        Why us?
      </h1>
      <h3 className=' subtitle-style'> Bypass Traditional Rental Desks</h3>
      <h3 className=' subtitle-style'>Maximize Your Value</h3>
      <p>Explore a range of vehicles — from daily drivers to unique luxury cars — offering a superior and
        more hassle-free experience compared to traditional car rental agencies.
        Secure the ideal car for your price range, with rates beginning at $25 daily.</p>

      <h3 className=' subtitle-style'>Hassle-Free Cancellation</h3>
      <p>Enjoy the freedom to cancel up to 24 hours before your trip begins for a complete refund.
        We understand that plans can change, providing the flexibility needed when unexpected situations arise.</p>

      <h3 className=' subtitle-style'>Flexible Delivery Solutions</h3>
      <p>Receive your rental directly to you or your destination.
        Numerous hosts provide the option to deliver to specific locations or
        well-known areas such as airports, train stations, and hotels, adding
        convenience to your travel plans.</p>
    </div>
  </div>
  )
}
