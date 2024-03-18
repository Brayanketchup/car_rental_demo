import React from 'react';
import { Banner, ContactForm, ContactInfo } from '@/components'

export default function contact() {
  return (
    <main>
      <Banner />
      <section id='contact-section' className='flex min-h-screen flex-col items-center justify-between  p-24 overflow-hidden'>

        <div className='flex flex-wrap gap-6 justify-center w-full'>
          <div className='max-w-[410px] w-full'>
            <ContactInfo />
          </div>

          <div className='max-w-[410px] w-full'>
            <ContactForm />
          </div>
        </div>

      </section>
      <div className='w-full h-auto py-10 px-5 flex flex-wrap justify-center text-white bg-[#2d2d2d] '>
        <h1 className='tittle-style'>Book a car by getting in touch with us</h1>
        <p className='tittle-style text-primary-color'>&nbsp;(123) 123-1231</p>
      </div>
    </main>
  )
}
