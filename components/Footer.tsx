import React from 'react'
import { FaCopyright } from 'react-icons/fa'
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'

function Footer() {
  return (
   <footer className='text-white w-full h-full py-5 bg-orange-400'>
      <div className='flex flex-col mb-4 space-x-9 py-2 px-2 justify-between items-center md:flex-row md:text-2xl md:px-3'>
        <p className='text-2xl mb-4 text-wrap font-semibold md:text-3xl'>Subscribe to our news letter</p>
        <div className='flex items-center flex-row-reverse'>
          <input type="text" placeholder='Email' className='text-slate-100 rounded-2xl py-2 absolute px-9 md:px-10 ' />
          <button className='bg-yellow-700 rounded-2xl py-2 relative px-4'>Subscribe</button>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <ul className='flex space-x-5 text-3xl mb-2 md:text-5xl'>
          <li><FaSquareInstagram /></li>
          <li><FaSquareTwitter /> </li>
          <li><FaSquareFacebook /> </li>
        </ul>
        <div className='flex space-x-3 items-center '>
          <p className='text-3xl font-bold mb-1 md:text-5xl'>Dressavenue</p>
          <div className='flex items-center text-xl space-x-1 md:text-2xl'>
            <p><FaCopyright /></p>
            <p className='text-lg md:text-xl '>Kontridev</p>
          </div>
        </div>
      </div>
   </footer>
  )
}

export default Footer
