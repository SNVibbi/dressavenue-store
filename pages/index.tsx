import React from 'react'
import HeroContainer from '../public/hero-container.jpg'
import Layout from '@/components/Layout'
import EasyShopping from '../public/easy-shopping.jpg'
import FastDelivery from '../public/fast-delivery.jpg'
import GoodExperience from '../public/good-experience.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Home () {


  return (
   <Layout>
       <section className='relative flex flex-col bg-cover bg-center bg-yellow-700' style={{ backgroundImage: `url(${HeroContainer.src})` }}>
        <div className='relative bg-yellow-700 z-10 pt-5 mx-auto max-w-7xl bg-opacity-75  p-6 rounded-lg text-white flex flex-col md:w-full'>
          <div className='max-w-2xl py-20 px-4 flex flex-col gap-6'>
            <h1 className='text-2xl font-bold md:text-5xl'>GET YOUR FASHIONABLE DRESSES HERE AT A DISCOUNTED PRICE</h1>
            <p className='text-xl text-gray-200 md:text-3xl'>Your No 1 fashion online store is here at your service.</p>
          </div>
        </div>
    </section>
    <div className='container mx-auto bg-slate-30'>
      <section className='flex flex-wrap justify-center gap-10 py-8'>
        <div className='text-center m-4'>
          <Image src={FastDelivery} alt="Fast Delivery" className='mx-auto' />
          <p className='text-lg font-semibold'>Fast and safe delivery</p>
        </div>
        <div className='text-center m-4'>
          <Image src={EasyShopping} alt="Easy shopping" className='mx-auto' />
          <p className='text-lg font-semibold'>Easy shopping</p>
        </div>
        <div className='text-center m-4'>
          <Image src={GoodExperience} alt="Good Experience" className='mx-auto' />
          <p className='text-lg font-semibold'>Good Experience</p>
        </div>
      </section>
      <section className='py-8'>
        <div className='flex justify-between mb-4 px-4'>
          <h2 className='text-2xl'>Trending Products</h2>
        </div>
      </section>
    </div>
   </Layout>
  )
}

export default Home 
