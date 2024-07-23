import Link from 'next/link';
import { FaArrowRight, FaArrowDownLong } from "react-icons/fa6";
import Image from 'next/image';
import webdevbanner from '../images/webdev.jpg';
import { webdevData } from '../data/webdev'; 
import { featuredWebdev } from '../data/Portfolio';

const Webdev = () => {
    return (
        <div>
            {/* only on small screens */}
            <div className="py-16 bg-black my-11 px-8 md:hidden">
                <h1 className="text-white my-9 text-2xl font-semibold">
                Obtain top-tier web and mobile applications.
                </h1>
                <Link href="/portfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
                    <span>View Portfolio</span>
                    <span><FaArrowRight /></span>
                </Link>
            </div>  

            <div className="hidden md:flex w-full my-8 lg:my-16">
                <div className="w-1/2 bg-black lg:relative">
                    <div className="mx-6 lg:mx-16 lg:absolute bottom-32 right-0 left-0">
                        <h1 className="text-white my-9 text-2xl lg:text-4xl lg:-leading-7 font-semibold md:max-w-lg max-w-xl">
                        Obtain top-tier web and mobile applications.
                        </h1>
                        <Link href="/portfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
                            <span>View Portfolio</span>
                            <span><FaArrowRight /></span>
                        </Link>
                        <h1 className="my-16"></h1>
                        <h1 className="animate-bounce">
                            <FaArrowDownLong size={35} color="white" />
                        </h1>
                    </div>
                </div>
                <div className="w-1/2">
                <Image src={webdevbanner} alt="webcrunchy" className="w-full" />
                </div>
            </div>

     {/* our webdesign services */}
       <div className="space-y-16">
      {webdevData.map((service, index) => (
        <div key={service.id} className={`flex flex-col md:flex-row space-y-5 lg:items-center ${index % 2 === 1 ? 'bg-black pt-11 lg:pt-16 text-white' : ''}`}>
          <div className={`space-y-5 px-7 lg:px-24 md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
            <h1 className="text-2xl font-bold">{service.name}</h1>
            <h1>{service.description}</h1>
            <h1 className="hover:text-[#F47521] inline-flex gap-2 font-bold text-xl items-center">
              Get in Touch <FaArrowRight color='#F47521' />
            </h1>
          </div>
          <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
            <Image src={service.image} alt={`webcrunchy-${service.id}`} className="md:w-full" />
          </div>
        </div>
      ))}
    </div>

    <div className="bg-black px-4 lg:px-24 py-8 lg:py-12 my-12 md:my-16 text-white">
      <h1 className="text-3xl font-bold lg:text-4xl mb-8">Featured Web Development Projects</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    {featuredWebdev.map((project) => (
      <div key={project.name} className="bg-white  overflow-hidden">
        <Image src={project.image} className="w-full h-auto" alt={project.name} />
        <div className="p-4 text-black">
          <h1>Development</h1>
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
    );
}

export default Webdev;

