import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import Logo from '../images/Logo.png';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#013220]  text-white w-[100%]">
            <div className="p-1 mx-2 md:mx-7 lg:mx-16 py-8 lg:py-16">
                <div className="text-xl lg:text-3xl flex font-bold flex-col md:justify-center md:flex-row gap-5">
                    <h1>Do you have a project you'd like to talk about?</h1>
                    <Link href="/contact" className="inline-flex underline underline-offset-4 hover:text-[#E34234] items-center gap-4">
                        <span>Contact Us</span>
                        <span><FaArrowRight size={23}/></span>
                    </Link>
                </div> 

                {/* Divider component */}
                <div className="border-t border-gray-300 my-10 lg:my-16" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-center">
                <div className="md:mx-auto -mx-8 order-3 md:order-none">
                <Image src={Logo} alt="Webcrunchy" className="w-72" />
                <h1 className="mx-7">Copyright © 2024 Webcrunchy</h1>
                </div> 

                    <div className="space-y-2 md:mx-auto">
                        <h1 className="text-lg font-bold">Gauteng</h1>  
                        <h1>Crystal Park, Benoni, 1515</h1> 
                        <a href="tel:+27635460625" className="underline underline-offset-2">+27 6354 60625</a>
                    </div>

                    <div className="space-y-3 md:mx-auto">
                        <h1 className="text-lg font-bold">Services</h1>  
                        <div className="flex flex-col gap-y-1">
                        <Link href="/webdesign" className="text-white hover:text-[#E34234]">Website Design</Link> 
                        <Link href="webdev" className="text-white hover:text-[#E34234]">Website Development</Link>
                        <Link href="/mobileapp" className="text-white hover:text-[#E34234]">Mobile App Development</Link>
                        <Link href="shopify" className="text-white hover:text-[#E34234]">Shopify Web Development</Link>
                        <Link href="/ecommerce" className="text-white hover:text-[#E34234]">Ecommerce Website Design</Link> 
                        </div>
                    </div>

                    
                </div>
                 
                 {/* social media links */}
                 <div className="flex flex-row gap-8 mt-16">
                    <span>
                        <FaFacebookF size={35}/>
                    </span>
                    <span>
                        <FaInstagram size={35}/>
                    </span>
                    <span>
                        <FaLinkedinIn size={35}/> 
                    </span>
                    <span>
                        <FaSquareXTwitter size={35}/>
                    </span>

                 </div>

            </div>
        </div>
    )
}

export default Footer;

