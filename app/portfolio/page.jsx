"use client"
import { FaCircleArrowDown } from "react-icons/fa6"
import PortfolioTabs from "../components/PortfolioTabs"

export const metadata = {
    title: "Portfolio",
    description: "Whether it's a simple personal site or a complex enterprise application, we are dedicated to every detail of our work.",
    keywords: ['Website design', 'Ecommerce Website Design', 'Webcrunchy','Web Development', 'Mobile App Development', 'Shopify Web Design'],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

const Portfolio = () => {

    return (
        <div> 
        <div className="w-full bg-[#013220]">

         <div className="p-1 mx-2  md:mx-7 space-y-8 lg:mx-16 py-8 lg:py-16 flex flex-col gap-y-11 text-white">
         <div className="space-y-5">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Recent Work</h1> 
            <h1 className="text-lg md:max-w-xl lg:text-xl">Whether it's a simple personal site or a complex enterprise application, we are dedicated to every detail of our work.</h1>
         </div>
         <span className="animate-bounce"><FaCircleArrowDown size={45} color="white"/></span>
         </div>
        </div> 

        {/* tabs for our recent projects */} 
        <PortfolioTabs/>
        </div>
    )
}

export default Portfolio