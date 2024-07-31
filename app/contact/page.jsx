"use client"

import { IoMdArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-gray-100 w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-3xl lg:text-5xl text-gray-800">Contact Us</h1>
              <h2 className="text-lg mt-3 text-gray-600">Fill out the form below and we'll be in touch soon.</h2>
            </div>

            <form className="space-y-6">
              <input 
                type="text" 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                placeholder="Name" 
                required 
              /> 
              <input 
                type="email" 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                placeholder="Email" 
                required 
              /> 
              <textarea 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                placeholder="Message" 
                rows="4" 
                required 
              />
              <button 
                type="submit" 
                className="bg-black text-white py-3 px-12 rounded-lg font-bold text-lg inline-flex items-center gap-2 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Submit  
                <IoMdArrowRoundForward size={24}/>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">Get direction</h1>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28652.15933978532!2d28.33133799999999!3d-26.147191900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953dd24ecdde89%3A0x55ee721ed5cd69ee!2sRynfield%2C%20Benoni%2C%201514!5e0!3m2!1sen!2sza!4v1722185329869!5m2!1sen!2sza"
                width="100%" 
                height="400" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              > 
              </iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h2 className="font-bold text-xl text-gray-800">Call Us</h2>
            <a href="tel:+27635460625" className="text-lg text-blue-600 hover:text-blue-800 transition">+27 6354 60625</a>
          </div>  

          <div className="space-y-2">
            <h2 className="font-bold text-xl text-gray-800">Email Us</h2>
            <a href="mailto:webcrunchyofficial@gmail.com" className="text-lg text-blue-600 hover:text-blue-800 transition">webcrunchyofficial@gmail.com</a>
          </div> 

          
        </div>
      </div>
    </div>
  )
}

export default Contact