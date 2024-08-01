import webbanner from '../images/webdesign.jpg'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import Image from 'next/image'
import { webdesignData } from '../data/webdesign';
import { featuredWebdesign } from '../data/Portfolio';
import { FaCircleArrowDown } from "react-icons/fa6"

export const metadata = {
  title: "Web design",
  description: "Create outstanding websites. Achieve business success.",
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

const Page = () => {
 
    return (
        <div>
         
         {/* only on small screens */}
         <div className="py-9  bg-[#013220] mb-16  px-2 md:hidden">
           <h1 className="text-white my-9 text-2xl font-semibold">Create outstanding websites. Achieve business success.</h1>
           <Link href="/portfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
            <span>View Portfolio</span>
            <span><FaArrowRight/></span> 
           </Link>
         </div> 

         {/* only on md and lg screens */}
         <div className="hidden md:flex w-full mb-24">

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
          <div className={`space-y-5 px-3 md:px-7 lg:px-24 md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <h1 className="text-2xl lg:text-4xl font-bold">{service.name}</h1>
            <h1 className="lg:text-lg">{service.description}</h1>
            <Link href="/contact" className="hover:text-[#F47521] inline-flex gap-2 font-bold text-xl items-center">
              Get A Quote <FaArrowRight color='#F47521' />
            </Link>
          </div>
          <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <Image src={service.image} alt={`webcrunchy-${service.id}`} className="md:w-full" />
          </div>
        </div>
      ))}
    </div>

    <div className="bg-black px-4 lg:px-24 py-8 lg:py-12 my-12 md:my-16 text-white">
      <h1 className="text-3xl font-bold lg:text-4xl mb-8">Featured Website Design Projects</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    {featuredWebdesign.map((project) => (
      <div key={project.name} className="bg-white  overflow-hidden">
        <Image src={project.image} className="w-full h-auto" alt={project.name} />
        <div className="p-4 text-black">
          <h1>Web Design</h1>
          <h2 className="text-lg font-bold my-2 lg:text-xl">{project.name}</h2>
          <p className="mb-4">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
  <Link href="/portfolio" className="text-white my-16 hover:bg-white items-center  inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
  <span>View all Portfolio</span>
  <span><FaArrowRight/></span>
  </Link>
</div>


        </div>
    )
}

export default Page