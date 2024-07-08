"use client"
import { HiBars3CenterLeft } from "react-icons/hi2";
import Logo from '../images/Logo.png'
import Image from 'next/image'
import { IoCloseOutline } from "react-icons/io5";
import {useState} from 'react'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false) 

    const closeNav = () => setOpenNav(!openNav)

    return (
        <div className="bg-[#013220] w-full">
       {/* navbar on small screen */} 
       <div className="p-1 flex md:hidden flex-row items-center justify-between">
        <Image  
        src={Logo} alt="webcrunchy" 
        className="w-64"
        />
        <button onClick={closeNav}>
        {openNav ? <IoCloseOutline size={45} color="#E9FFDB"/>:  
        <HiBars3CenterLeft size={45} color="#E9FFDB"/> }
        </button>
       </div>
     

        </div>
    )
}

export default Navbar