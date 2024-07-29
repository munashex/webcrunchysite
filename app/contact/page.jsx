"use client"

import { IoMdArrowRoundForward } from "react-icons/io";



const Contact = () => {

  return (
    <div className="bg-[#F6F6F6] w-full py-11">
      <div className="mx-2 md:mx-7 lg:mx-16 my-16 lg:my-24 grid grid-cols-1  lg:grid-cols-2 gap-20">

        <div className="space-y-11">
          <div className="text-center md:text-start">
            <h1 className="font-bold text-2xl lg:text-4xl">Contact Us</h1>
            <h2 className="text-lg mt-2 lg:text-xl">Fill out the form below and we’ll be in touch soon.</h2>
          </div>

          <form className="space-y-4">
            <input 
              type="text" 
              className="border p-3 w-full rounded border-gray-300 bg-white" 
              placeholder="Name" 
              required 
            /> 
            <input 
              type="email" 
              className="border p-3 w-full rounded border-gray-300 bg-white" 
              placeholder="Email" 
              required 
            /> 
            <textarea 
              className="border p-3 w-full rounded border-gray-300 bg-white" 
              placeholder="Message" 
              rows="4" 
              required 
            />
            <button 
              type="submit" 
              className="bg-black inline-flex text-lg items-center gap-2 text-white py-2 px-11 lg:px-20 rounded font-bold hover:bg-[#F47521] transition"
            >
              Submit  
              <span><IoMdArrowRoundForward size={20}/></span>
            </button>
          </form>
        </div>

        <div className="space-y-7">
          <h1 className="text-2xl lg:text-4xl font-bold">Get direction</h1>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28652.15933978532!2d28.33133799999999!3d-26.147191900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953dd24ecdde89%3A0x55ee721ed5cd69ee!2sRynfield%2C%20Benoni%2C%201514!5e0!3m2!1sen!2sza!4v1722185329869!5m2!1sen!2sza"
            width="100%" 
            height="400" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-lg"
          > 
          </iframe>
        </div>

      </div>
    </div>
  )
}

export default Contact