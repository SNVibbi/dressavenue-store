import React, { useState } from 'react'
import Hero from '../public/hero.png'
import { headers } from 'next/headers'
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { BsCartDash } from 'react-icons/bs';
import { RiHome5Fill} from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { CiSearch } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';

function Header() {
    const [menuOpen, setMenuOpen]= useState(false);


  return (
    <header className='py-2 text-white bg-yellow-700'>
        <div className='container mx-auto md:px-5 flex justify-between items-center px-1'>
            <div className='flex items-center px-3'>
                <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <HiX className="text-3xl" /> : <HiMenu className='text-3xl' />}</button>
                <Image src={Hero} alt='Hero' width={50} height={50} className='ml-5 md:w-16' />
                <nav className='hidden md:flex md:text-2xl space-x-8 ml-6 font-semibold'>
                    <Link href='/'>Home</Link>
                    <Link href='/products'>Products</Link>
                </nav>
            </div>
            <div className='flex px-3  items-center space-x-4 md:text-3xl md:px-7 md:space-x-8'>
                <button className='text-2xl md:text-3xl'><CiSearch /></button>
                <Link href="/cart">
                   <button className='relative text-2xl flex items-center space-x-1 md:text-3xl'>
                        <BsCartDash />
                        <p className='hidden md:block'>Cart</p>
                        {}
                    </button>
                </Link>
            </div>
        </div>
        {menuOpen && (
            <nav className='md:hidden w-36 h-60 flex flex-col justify-center px-2 round-lg' style={{backgroundColor: '#E08C39', fontFamily: 'Montserrat'}}>
                <Link href="/">
                    <div className='flex items-center space-x-5 mb-2'>
                       <p><RiHome5Fill /></p>
                       <p>Home</p> 
                    </div>
                </Link>
                <Link href="/products">
                    <div className='flex items-center space-x-5 mb-2'>
                        <p><AiOutlineProduct /></p>
                        <p>Products</p>
                    </div>
                </Link>
                <Link href="/cart">
                    <div className='flex items-center space-x-5 mb-2'>
                        <p><BsCartDash /></p>
                        <p>Cart</p>
                    </div>
                </Link>
                <Link href="/contact">
                    <div className='flex items-center space-x-5 mb-2'>
                        <p><FaPhoneAlt /></p>
                        <p>Contacts Us</p>
                    </div>
                </Link>
                <Link href="/about">
                    <div className='flex items-center space-x-5 mb-2'>
                        <p><CgDanger /></p>
                        <p>About Us</p>
                    </div>
                </Link>
            </nav>
        )}
    </header>
  )
}

export default Header
