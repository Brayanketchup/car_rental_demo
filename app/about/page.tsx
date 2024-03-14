import React from 'react'
import Image from 'next/image'

export default function about() {
  return (

    <>

      <div className=' relative inset-0 h-96 flex'>
        <div className='h-full bg-white opacity-30  w-full flex absolute z-[1]'> </div>
        <div className='bg-banner-bg bg-cover h-full w-full flex z-0'></div>

      </div>

      <section className='flex min-h-screen flex-col items-center justify-between text-center p-24 overflow-hidden '>


        <div>
          <h2 className='2xl:text-[30px] sm:text-[20px] text-[10px] font-semibold'>Plan your trip</h2>
          <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>Quick & easy car rental</h1>

          <div className=' w-full flex justify-between'>
            <div className='flex flex-col items-center'> 
              <Image src={"/orange-car-logo.png"} alt='' height={170} width={170} className=' object-contain'></Image> <h2 className=' text-xl font-extrabold'>
              Choose a Vehicle</h2>
              <p>Explore our extensive selection of cars tailored for every kind of driving experience.
                Find the ideal vehicle to match your requirements.</p>
            </div>

            <div className='flex flex-col items-center'> 
              <Image src={"/orange-agent-logo.png"} alt='' height={170} width={170} className=' object-contain'></Image> <h2 className=' text-xl font-extrabold'>Speak with Our Team</h2>
              <p>Connect with our approachable and well-informed team members who
                are available to address any inquiries or issues you might have.</p>
            </div>

            <div className='flex flex-col items-center'> 
              <Image src={"/orange-traveling-logo.png"} alt='' height={170} width={170} className=' object-contain'></Image> <h2 className=' text-xl font-extrabold'>Start Your Journey
            </h2>
              <p>Embark on your journey with confidence,
                whether you're cruising the highways or navigating city streets,
                with our diverse fleet of vehicles.</p>
            </div>
          </div>

        </div>

        <div className='bg-gray-100 p-4 rounded-xl'>
          <div className='w-full flex '>
            <Image src={"/five-cars.png"} height={534} width={800} alt='cars picture' className='object contain' />
          </div>
          <h1 className='2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold'>
            Best valued deals you will ever find
          </h1>
          <p className=' text-[#706f7b] text-sm sm:text-md md:text-lg px-20'>
            Explore the most exceptional bargains available through our unmatched promotions.
            We are committed to ensuring you receive the greatest value for your investment,
            allowing you to indulge in premium services and products at affordable prices.
            Our specially crafted offers are aimed at enhancing your rental experience to the fullest,
            so seize this opportunity to achieve significant savings.
          </p>
        </div>

      </section>


    </>


  )
}

