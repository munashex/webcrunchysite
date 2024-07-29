import React from 'react'
import { FaArrowRight } from "react-icons/fa6"; 
import Link from 'next/link'
import services from './data/services';

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
      
      </div>

    </div>
  )
}

export default page






