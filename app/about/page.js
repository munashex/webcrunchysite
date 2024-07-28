import { FaCircleArrowDown } from "react-icons/fa6"
import { aboutData, visionData, missionData } from "../data/about"
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import Values from "../components/Values";
import OurTools from "../components/OurTools";

const About = () => {

    return (
        <div className="">

          <div className="w-full bg-[#013220] space-y-4">
         <div className="p-1 mx-2 md:mx-7 lg:mx-16 py-8 lg:py-16 flex flex-col gap-y-11">
         <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">An innovative and creative digital agency</h1>
         <span className="animate-bounce"><FaCircleArrowDown size={45} color="white"/></span>
         </div>
        </div> 
        
        <div className="md:max-w-xl p-1 mx-2 md:mx-7 lg:mx-16 mt-12 md:mb-9">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Achieving online success effortlessly has been our slogan and vision since 2019</h1>
        </div>

        <div className="md:max-w-4xl lg:max-w-7xl p-1 mb-12 mx-2 md:mx-7 lg:mx-16 space-y-3">
          {aboutData.map((info) => (
            <div key={info.id}> 
            <h1 className="text-lg">{info.description}</h1>
            </div>
          ))}
        </div>

        <div className="space-y-16 p-1 mx-2  md:mx-7 lg:mx-24 md:mt-24">
    {visionData.map((info) => (
        <div key={info.name} className="flex flex-col md:flex-row gap-3 md:gap-9 md:items-center md:border-t-2">
            {/* Image section */}
            <div className="w-full md:w-1/2">
                <Image src={info.image} alt={info.name} className="object-cover w-full h-auto" />
            </div>
            {/* Text section */}
            <div className="md:w-1/2">
                <div className="space-y-2">
                    <h1 className="text-xl lg:text-3xl font-bold">{info.name}</h1>
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    ))}
    {missionData.map((info) => (
        <div key={info.name} className="flex flex-col md:flex-row gap-3 md:gap-9 md:items-center md:border-t-2">
            {/* Text section */}
            <div className="md:w-1/2 order-1 md:order-none ">
                <div className="space-y-2">
                    <h1 className="text-xl lg:text-3xl font-bold">{info.name}</h1>
                    <p>{info.description}</p>
                </div>
            </div>
            {/* Image section */}
            <div className="w-full md:w-1/2 ">
                <Image src={info.image} alt={info.name} className="object-cover w-full h-auto" />
            </div>
        </div>
    ))}
    </div>
      
      <div className="flex flex-col md:flex-row my-12 md:my-32 gap-y-16 gap-x-24 lg:gap-x-32 md:justify-center items-center">
    
        <div className="flex flex-col items-center"> 
         <h1 className="inline-flex items-center gap-1 font-bold text-4xl">15 <FaPlus size={23}/> </h1>
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

        {/* our values component */}
        <Values/>
         {/* our techstack component */}
        <OurTools/>
        </div>
    )
}

export default About