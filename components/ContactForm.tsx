import React from 'react'

export const ContactForm = () => {
  return (
    <form className='flex flex-col w-full'>
              <label className=' font-extrabold  '>
                Full Name <b className='text-primary-color'>*</b>
              </label>
              <input type="text" placeholder='E.g: "Brayan Martinez"' className=' bg-gray-200 h-10 w-full p-4 rounded-sm border-none outline-none '></input>

              <label className='font-extrabold'>
                Email <b className='text-primary-color'>*</b>
              </label>
              <input type="email" placeholder="youremail@gmail.com" className=' bg-gray-200 h-10 w-full p-4 rounded-sm border-none outline-none '></input>

              <label className='font-extrabold'>
                Tell us about it <b className='text-primary-color'>*</b>
              </label>
              <textarea placeholder="Write Here.." className=' bg-gray-200 h-72 px-5 py-8 rounded-md border-none outline-none mb-8 '></textarea>

              <button type="submit" className=' bg-primary-color hover:bg-orange-700 transition-colors px-7 py-8 shadow-sm shadow-orange-500 text-white font-bold cursor-pointer'>
                &nbsp; Send Message
              </button>
            </form>
  )
}
