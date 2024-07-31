import { FaArrowRight } from "react-icons/fa6"; 
import Link from 'next/link';
import services from './data/services';
import featured from './data/featuredProducts';
import Image from 'next/image';
import AboutOverview from './components/AboutOverview';
import { FaPlus } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";

function page() {
  return (
    <div>
      <div className="bg-[#013220] space-y-7 lg:space-y-9 text-white px-2 md:px-7 lg:px-16 py-11">
        <h1 className="font-thin text-xl">
          Website Design and Development Company
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl md:max-w-2xl lg:max-w-2xl">
          We design fantastic websites and powerful software systems
        </h1>
        <Link
          href="/portfolio"
          className="border py-2 px-7 inline-flex items-center gap-3 border-white hover:bg-white hover:text-black font-bold"
        >
          View Portfolio <span><FaArrowRight size={20} /></span>
        </Link>
      </div>

      {/* Our services */}
      <div className="my-11 lg:my-20 mx-2 md:mx-7 lg:mx-16">
        <h1 className="font-bold text-3xl lg:text-4xl text-center">
          Our Services
        </h1>
        <div className="flex flex-col lg:flex-row gap-y-20 mt-9 lg:mt-14 gap-x-16">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center gap-y-4">
              <span>{service.icon}</span>
              <h1 className="text-2xl lg:text-3xl font-bold">{service.name}</h1>
              <p className="text-center md:text-lg">{service.description}</p>
              <Link
                href={service.link}
                className="font-semibold underline decoration-clone underline-offset-8 hover:text-[#E34234]"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        {/* Divider section */}
        <div className="border border-slate-200 my-16 lg:my-24" />

        {/* Featured projects */}
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 lg:mx-16">
            {featured.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full"
                    width={500}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {product.name}
                  </h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-black text-white py-3 px-8  font-bold transition-all duration-300 hover:bg-[#F47826] hover:shadow-lg"
            >
              View all projects <FaArrowRight className="text-lg" />
            </Link>
          </div>
        </div>

        {/* About us overview */}
        <AboutOverview />

        <div className="flex flex-col md:flex-row my-12 md:my-32 gap-y-16 gap-x-24 lg:gap-x-32 md:justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="inline-flex items-center gap-1 font-bold text-4xl">
              4 <FaPlus size={23} />
            </h1>
            <h1>Years of Experience</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="inline-flex items-center gap-1 font-bold text-4xl">
              200 <FaPlus size={22} />
            </h1>
            <h1>Successful Projects</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="inline-flex items-center gap-1 font-bold text-4xl">
              100 <FaPercent size={23} />
            </h1>
            <h1>On Time Delivery</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
