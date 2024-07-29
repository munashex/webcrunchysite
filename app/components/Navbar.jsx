"use client"
import { HiBars3CenterLeft } from "react-icons/hi2";
import Logo from '../images/Logo.png'
import Image from 'next/image'
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from 'next/link'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false) 
    const [toggleServices, setToggleServices] = useState(false)

    const closeNav = () => setOpenNav(!openNav) 

    const handleOpenServices = () => setToggleServices(true) 
    const handleCloseServices = () => setToggleServices(false)

    const openServiceSm = () => setToggleServices(!toggleServices)


    return (
        <div className="bg-[#013220] w-full relative">
            {/* navbar on small screen */} 
            <div className="flex p-1 px-2 lg:hidden flex-row items-center justify-between">
                <Link href="/">
                <Image  
                    src={Logo} alt="webcrunchy" 
                    className="w-64"
                />
                </Link>
                <button onClick={closeNav}>
                    {openNav ? <IoCloseOutline size={45} color="#E9FFDB"/> :  
                    <HiBars3CenterLeft size={45} color="#E9FFDB"/> }
                </button>
            </div>

            {/* navbar links on small screens */}
            {openNav ? 
            <div className="text-[#F5FFFA] h-screen flex gap-y-11 flex-col lg:hidden">
                  <div className="text-xl font-semibold space-y-5 flex flex-col mx-7 my-5">
                    <Link href="/portfolio" onClick={() => setOpenNav(!openNav)}>Portfolio</Link> 
                    <button  className="inline-flex outline-none items-center gap-11" onClick={openServiceSm}>
                        Services 
                    {toggleServices ?   <IoIosArrowUp size={25}/>: <IoIosArrowDown size={25}/>} 
                    </button>
                    {toggleServices ?  
                    ( 
                    <div className="flex flex-col gap-y-3 text-lg font-thin"> 
                      <Link href="/webdesign" onClick={() => setOpenNav(!openNav)}>Website Design</Link> 
                      <Link href="/ecommerce" onClick={() => setOpenNav(!openNav)}>Ecommerce Website Design</Link> 
                      <Link href="/webdev" onClick={() => setOpenNav(!openNav)}>Website Development</Link>
                      <Link href="/mobileapp" onClick={() => setOpenNav(!openNav)}>Mobile App Development</Link>
                      <Link href="/shopify" onClick={() => setOpenNav(!openNav)}>Shopify Web Development</Link>
                    </div> 
                    ) 
                    :  
                    null}
                    <Link href="/about" onClick={() => setOpenNav(!openNav)}>About Us</Link>
                </div>
                
                <Link href="/contact" className="text-lg mx-5 inline-flex justify-center items-center gap-x-3  font-bold border-2 bg-[#F5FFFA] text-[#013220]  p-1 px-6 hover:bg-[#E34234] hover:border-[#E34234] hover:text-[#F5FFFA]">
                    <span>Contact Us</span>
                    <span><FaArrowRight size="21"/></span>
                </Link>
                
                <div className="mx-7 my-3 flex flex-col gap-y-2"> 
                    <h1 className="text-xl font-semibold">Call Us Now</h1> 
                    <a href="tel:+27635460625" className="text-xl font-semibold hover:underline">+2763 546 0625</a>
                </div>
            </div>
            : null
            }
        
            {/* navbar on lg screens  */} 
            <div className="hidden lg:flex text-[#F5FFFA] p-1 items-center justify-between mx-12 relative">
               <Link href="/">
               <Image src={Logo} alt="webcrunchy" className="w-72" />
               </Link>

                <div className="text-xl font-bold flex flex-row gap-x-16 items-center">
                    <Link href="/portfolio">Portfolio</Link> 
                    <div 
                    onMouseEnter={handleOpenServices} 
                    onMouseLeave={handleCloseServices}
                    >
                        <h1 className="inline-flex items-center gap-2">Services {toggleServices ? <IoIosArrowUp/> : <IoIosArrowDown/>}</h1> 
                        {toggleServices && (
                            <div className="absolute top-16 gap-3 flex flex-col items-center  bg-white right-64 py-7 px-8 rounded-t-md">
                        
                               <Link href="/webdesign" className="text-black hover:text-[#E34234]">Website Design</Link> 
                               <Link href="webdev" className="text-black hover:text-[#E34234]">Website Development</Link>
                               <Link href="/mobileapp" className="text-black hover:text-[#E34234]">Mobile App Development</Link>
                               <Link href="shopify" className="text-black hover:text-[#E34234]">Shopify Web Development</Link>
                               <Link href="/ecommerce" className="text-black hover:text-[#E34234]">Ecommerce Website Design</Link> 
                            </div>
                        )}
                    </div>
                    <Link href="/about">About Us</Link>  
                    <Link href="/contact" className="text-lg inline-flex items-center gap-x-3  font-bold border-2 bg-[#F5FFFA] text-[#013220] p-1 px-6 hover:bg-[#E34234] hover:border-[#E34234] hover:text-[#F5FFFA]">
                        <span>Contact Us</span>
                        <span><FaArrowRight size="21"/></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar


