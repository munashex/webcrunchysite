"use client"
import {HiBars3CenterLeft }  from "react-icons/hi2";
import Logo from '../images/Logo.png'
import Image from 'next/image'
import { IoCloseOutline } from "react-icons/io5";
import {useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false) 

    const closeNav = () => setOpenNav(!openNav)

    return (
        <div className="bg-[#013220] w-full">
       {/* navbar on small screen */} 
       <div className="p-1 px-3 flex lg:hidden flex-row items-center justify-between">
        <Image  
        src={Logo} alt="webcrunchy" 
        className="w-64"
        />
        <button onClick={closeNav}>
        {openNav ? <IoCloseOutline size={45} color="#E9FFDB"/>:  
        <HiBars3CenterLeft size={45} color="#E9FFDB"/> }
        </button>
       </div>

         {/* navbar links on small screens */}
         {openNav ? 
         <div className="text-[#F5FFFA] h-screen flex gap-y-6 flex-col lg:hidden">
            <div className="text-xl font-semibold space-y-3 mx-7 my-5">
           <h1>Portfolio</h1> 
           <h1>Services</h1>
           <h1>About Us</h1>
           <h1>Blog</h1>
           </div>
            
           <button className="text-lg mx-5 inline-flex justify-center items-center gap-x-3  font-bold border-2 bg-[#F5FFFA] text-[#013220]  p-1 px-6 hover:bg-[#E34234] hover:border-[#E34234] hover:text-[#F5FFFA]">
            <span>Contact Us</span>
            <span><FaArrowRight size="21"/></span>
            </button>
          
      
             <div className="mx-7 my-3 flex flex-col gap-y-2"> 
                <h1 className="text-xl font-semibold">Call Us Now</h1> 
                <a href="tel:+27635460625" className="text-xl font-semibold hover:underline">+2763 546 0625</a>
             </div>
         </div>
         : null
         }
     
         {/* navbar on lg screens  */} 
         <div className="hidden  lg:flex text-[#F5FFFA] p-1 items-center justify-between  mx-12">
          <Image src={Logo} alt="webcrunchy"
          className="w-72" 
          />

          <div className="text-xl font-bold flex flex-row gap-x-16 items-center">
            <h1>Portfolio</h1> 
            <h1>Services</h1>
            <h1>About Us</h1> 
            <button className="text-lg inline-flex items-center gap-x-3  font-bold border-2 bg-[#F5FFFA] text-[#013220]  p-1 px-6 hover:bg-[#E34234] hover:border-[#E34234] hover:text-[#F5FFFA]">
            <span>Contact Us</span>
            <span><FaArrowRight size="21"/></span>
            </button>
          </div>
        </div>


        </div>
    )
}

export default Navbar