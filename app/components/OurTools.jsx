import {techStack} from "../data/techstack"
import Image from 'next/image'

const OurTools = () => {

    return (
        <div className="p-1 mx-7 lg:mx-16 py-8 lg:py-16 mb-12">
         <div className="space-y-2 md:space-y-3">
            <h1 className="text-3xl font-bold  md:text-4xl lg:text-5xl">Our tools & technologies</h1>
            <h1 className="text-lg md:max-w-xl">Our multidisciplinary team and industry partners give you access to an extensive network of services, tools, and technologies.</h1>
         </div>

         <div className="grid grid-cols-2 my-11 gap-y-5 md:gap-y-10 md:grid-cols-3 lg:grid-cols-6 gap-4">
         {techStack && techStack.map((icon) => (
          <div key={icon.id} className="flex justify-center items-center">
          <Image src={icon.icon} alt={`webcrunchy${icon.id}`} className="w-24 h-24 object-contain" />
           </div>
          ))}
          </div>

        </div>
    )
}

export default OurTools