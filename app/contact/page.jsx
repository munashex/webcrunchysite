"use client";
import { IoMdArrowRoundForward } from "react-icons/io";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
      })
      .then(
        () => {
          toast.success('Sent successfully!');
        },
        (error) => {
          console.log(error);
          toast.error('Failed to send the message. Please try again later.');
        },
      );
  };

  return (
    <div className="bg-gray-50 w-screen py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-gray-900">Contact Us</h1>
              <p className="text-lg mt-4 text-gray-700">Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <input 
                type="text" 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
                placeholder="Name" 
                name="user_name" 
                required 
              /> 
              <input 
                type="email" 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
                placeholder="Email" 
                name="user_email"
                required 
              /> 
              <textarea 
                className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
                placeholder="Message" 
                rows="6" 
                required 
                name="message" 
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold text-lg inline-flex items-center gap-2 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
              >
                Submit  
                <IoMdArrowRoundForward size={24}/>
              </button>
              <ToastContainer limit={1} />
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900">Get Directions</h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.9348892431285!2d28.367556951871713!3d-26.13534654547806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953d86234d1eeb%3A0x62bb0120c097b9b5!2swebcrunchy!5e0!3m2!1sen!2sza!4v1722762412549!5m2!1sen!2sza"
                className="w-full h-96"
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
            <h2 className="font-bold text-xl text-gray-900">Call Us</h2>
            <a href="tel:+27635460625" className="text-lg text-blue-600 hover:text-blue-800 transition">+27 6354 60625</a>
          </div>  

          <div className="space-y-2">
            <h2 className="font-bold text-xl text-gray-900">Email Us</h2>
            <a href="mailto:webcrunchyofficial@gmail.com" className="text-lg text-blue-600 hover:text-blue-800 transition">webcrunchyofficial@gmail.com</a>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Contact;
