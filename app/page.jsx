import React from 'react'
import { FaArrowRight } from "react-icons/fa6"; 
import Link from 'next/link'
import services from './data/services';
import featured from './data/featuredProducts';
import Image from 'next/image'
import AboutOverview from './components/AboutOverview';
import { FaPlus } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";

function page() {
  return (
    <div>
      <div className="bg-[#013220] space-y-7 lg:space-y-9 text-white px-2 md:px-7 lg:px-16 py-11">
        <h1 className="font-thin text-xl">Website Design and Development Company</h1> 
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl md:max-w-2xl lg:max-w-2xl">We design fantastic websites and powerful software systems</h1>
         <Link href="/portfolio" className="border py-2 px-7  inline-flex items-center gap-3 border-white hover:bg-white hover:text-black font-bold">View Portfolio <span><FaArrowRight size={20}/></span></Link>
      </div>

      {/* our services */}
      <div className="my-11 lg:my-20 mx-2 md:mx-7 lg:mx-16">
         <h1 className="font-bold text-3xl lg:text-4xl text-center">Our Services</h1> 
         
         <div className="flex flex-col lg:flex-row gap-y-20 mt-9 lg:mt-14 gap-x-16">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-y-4">
                <span>{service.icon}</span>
                <h1 className="text-2xl lg:text-3xl font-bold">{service.name}</h1>
                <p className="text-center">{service.description}</p>
                <Link href={service.link} className="font-semibold underline decoration-clone underline-offset-8 hover:text-[#E34234]">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
      
        {/* Divider section */}
        <div className="border border-slate-200 my-16 lg:my-24" />
        
        {/* Featured projects */}
        <div className="mx-0.5 lg:mx-14">
            <h1 className="text-center text-2xl md:text-3xl font-bold lg:text-4xl">Featured Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-6 md:mt-10">
              {featured.map((product) => (
                <div key={product.name} className="flex flex-col items-center">
                  <Image src={product.image} alt={product.name} className="w-full rounded-md" />
                  <h1 className="mt-4 text-xl md:text-2xl font-bold">{product.name}</h1>
                  <p className="mt-2 text-center">{product.description}</p>
                </div>
              ))}
            </div>
            <Link href="/portfolio" className="border py-2 px-7 mt-11 lg:mt-20  inline-flex items-center gap-3 border-black hover:bg-black hover:text-white font-bold">View all projects <span><FaArrowRight size={20}/></span></Link>
            </div>

           {/* about us overview */}
          <AboutOverview/>

        <div className="flex flex-col md:flex-row my-12 md:my-32 gap-y-16 gap-x-24 lg:gap-x-32 md:justify-center items-center">
        <div className="flex flex-col items-center"> 
         <h1 className="inline-flex items-center gap-1 font-bold text-4xl">4 <FaPlus size={23}/> </h1>
         <h1>Years of Experience</h1>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="inline-flex items-center gap-1 font-bold text-4xl">200 <FaPlus size={22}/></h1>
          <h1>Successful Projects</h1>
        </div>

        <div className="flex flex-col items-center">
         <h1 className="inline-flex items-center gap-1 font-bold text-4xl">100 <FaPercent size={23}/></h1> 
         <h1>On Time Delivery</h1>
        </div>
      </div>

      </div>
    </div>
  )
}

export default page






