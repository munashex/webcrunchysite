import webbanner from '../images/webdesign.jpg'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from 'next/image'
import { webdesignData } from '../data/webdesign';

const Page = () => {
    // Create outstanding websites. Achieve business success.
    return (
        <div>
         
         {/* only on small screens */}
         <div className="py-16 bg-black my-11 px-8 md:hidden">
           <h1 className="text-white my-9 text-2xl font-semibold">Create outstanding websites. Achieve business success.</h1>
           <Link href="/portfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
            <span>View Portfolio</span>
            <span><FaArrowRight/></span>
           </Link>
         </div> 

         {/* only on md and lg screens */}
         <div className="hidden md:flex w-full my-8 lg:my-16">

            <div className="w-1/2 bg-black lg:relative">
            <div className="mx-6 lg:mx-16 lg:absolute bottom-32 right-0 left-0">
            <h1 className="text-white my-9 text-2xl lg:text-4xl lg:-leading-7 font-semibold md:max-w-lg max-w-xl">Create outstanding websites. Achieve business success.</h1>
             <Link href="/portfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
            <span>View Portfolio</span>
            <span><FaArrowRight/></span>
           </Link>
           <h1 className="my-16"></h1>
           <h1 className="animate-bounce"><FaArrowDownLong size={35} color="white"/></h1>
            </div>

          </div>
          <div className="w-1/2">
           <Image src={webbanner} alt="webcrunchy" 
           className="w-full"
           />
          </div>
         </div>

         {/* our webdesign services */}
      <div className="space-y-16">
      {webdesignData.map((service, index) => (
        <div key={service.id} className={`flex flex-col md:flex-row space-y-5 lg:items-center ${index % 2 === 1 ? 'bg-black pt-11 lg:pt-16 text-white' : ''}`}>
          <div className={`space-y-5 px-7 lg:px-24 md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <h1 className="text-2xl font-bold">{service.name}</h1>
            <h1>{service.description}</h1>
            <h1 className="hover:text-[#F47521] inline-flex gap-2 font-bold text-xl items-center">
              Get A Quote <FaArrowRight color='#F47521' />
            </h1>
          </div>
          <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <Image src={service.image} alt={`webcrunchy-${service.id}`} className="md:w-full" />
          </div>
        </div>
      ))}
    </div>

        </div>
    )
}

export default Page