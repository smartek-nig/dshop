'use client';
import React from 'react'
import { Menu } from 'lucide-react';
import Link from 'next/link'
import { FaCheck, FaHeart, FaInfo, FaPhoenixFramework, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    <div className="navbar_top flex items-center justify-center bg-blue-800 h-[45px] w-full">
        
        <div className='lg:container flex justify-between items-center'>

            <p className='flex items-center gap-2 text-sm font-inter font-normal text-white capitalize'><FaCheck/>free on all orders over $40</p>

            <div className='navbar_top_right flex items-center gap-6'>
                <select defaultValue="server location" className="bg-none h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white">
                    <option>eng</option>
                    <option>bangla</option>

                </select>
                <button><Link href={'/faqs'} className='text-sm text-white font-inter font-normal capitalize' target='blank'>Faqs</Link></button>
            <button><Link href={'/need-help'} className='flex items-center text-sm text-white font-inter font-normal capitalize' target='blank'><FaInfo/>need help</Link></button>

            </div>
            

        </div>
        
    </div>
    <div className='navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]'>
        <div className='lg-container grid grid-cols-3 items-center'>
            <div className='logo_wrapper'>
                <Link to='/page' className='text-3xl text-black font-inter font-medium capitalize flex items-center gap-2'><FaPhoenixFramework size='2rem' color='#029fae' target='blank'/>comforty</Link>

            </div>
            <div className='search_box'>
                <form action='#' className='max-w-[443px] h-[44px] relative'>
                    <input type="text" placeholder='search here...' className='max-w-[443px] w-full h-full bg-white rounded-lg pl-4'/>

                    <button className='absolute to-50% right-4 translate-y-1/2'><FaSearch size='22px' color='#272343'/></button>
                </form>

            </div>

            <div className='navbar_middle_right flex items-center gap-6'>
                <button>
                    <FaShoppingCart/> cart <div className='badge badge-sm bg-[#029fae]'>2</div>
                </button>
                <button className='btn capitalize'> 
                    <FaHeart/>
                </button>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn m-1'><FaUser /></div>
                    <ul tabIndex={0} className='dropdown-context menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm'>
                        <li><Link href={'/account'} target='blank'>Account</Link></li>
                        <li><Link href={'logout'} target='blank'>Logout</Link></li>
                    </ul>

                </div>

            </div>

        </div>

    </div>
    <div className='navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b border-[#e5e5e5]'>
        <div className='lg-container flex items-center justify-between'>

            <div className='navbar_bottom_left flex items-center gap-8'>
                <div className='dropdon dropdown-start'>
                    <div tabIndex={0} role='button' className='btn m-1 flex items-center gap-5'><Menu/> all Categories</div>
                    <ul tabIndex={0} className='dropdown-context menu bg-base-100 rounded-box z-1 w-25 p-2 shadow-sm'>
                        <li><Link href={'/books'} target='blank'>books</Link></li>
                        <li><Link href={'/electronics'} target='blank'>electronics</Link></li>
                        <li><Link href={'/sport'} target='blank'>sport</Link></li>
                        <li><Link href={'/cloths'} target='blank'>cloths</Link></li>
                        <li><Link href={'/'} target='blank'>home</Link></li>
                    </ul>

                </div>

           

            <nav className='flex items-center gap-8'>
                <Link to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize '>Home</Link>
                <Link  to='shop' className='text-sm text-[#636270] font-inter font-medium capitalize'>Shop</Link>
                <Link  to='product'className='text-sm text-[#636270] font-inter font-medium capitalize'>product</Link>
                <Link  to='pages'className='text-sm text-[#636270] font-inter font-medium capitalize'>pages</Link>
                <Link  to='about'className='text-sm text-[#636270] font-inter font-medium capitalize'>About</Link>
            </nav>
            
            
        </div>

        <div className='navbar_bottom_right flex items-center gap-8'>
            <p className='text-sm text-[#636270] font-inter font-normal capitalize'>contact: <span className='text-[#272343]'>(080)353-6920</span></p>

        </div>
        
         </div>
         
         </div>

    </div>
    


  )
}
