import { FaArrowRight } from "react-icons/fa6";
import { TbCircleDot } from "react-icons/tb";
import services from "./data/services";
import featured from "./data/featuredProducts";
import Link from 'next/link';
import Image from 'next/image';
import AboutOverview from "./components/AboutOverview";


const Home = () => {
  const videoUrl = "https://res.cloudinary.com/ditls34gp/video/upload/v1720525805/vhptrt7mjlyxhdah2dia.mp4";

  return (
    <div>
      {/* Video background component */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-[70%] lg:h-[80%] object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Add additional sources for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 mx-7 lg:mx-20 top-11">
          <div className="space-y-12">
            <div className="space-y-5 max-w-none lg:max-w-3xl">
              <h1 className="text-white text-xl inline-flex gap-x-3 items-center md:text-xl lg:text-2xl">
                <span><TbCircleDot size={22} /></span>
                Web Design & Development Agency
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">
                We create exceptional websites and reliable software solutions.
              </h1>
            </div>
            <button className="text-lg inline-flex items-center gap-x-3 font-bold border-2 text-white p-1 px-6 hover:bg-white hover:text-black">
              <span>View Portfolio</span>
              <span><FaArrowRight size="21" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Our service section */}
      <div className="relative bottom-44 lg:bottom-24 left-0 right-0">
        <div className="mx-7 md:mx-16 lg:mx-20">
          <h1 className="text-center text-2xl md:text-3xl font-bold lg:text-4xl">Our Services</h1>

          <div className="flex flex-col lg:flex-row gap-y-20 mt-9 lg:mt-14 gap-x-16">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col items-center gap-y-4">
                <span>{service.icon}</span>
                <h1 className="text-2xl lg:text-3xl font-bold">{service.name}</h1>
                <p className="text-center">{service.description}</p>
                <Link href={service.link} className="font-semibold underline decoration-clone underline-offset-8 hover:text-[#E34234]">
                  Learn more
                </Link>
              </div>
            ))}
          </div>

          {/* Divider section */}
          <div className="border border-slate-500 my-16 lg:my-24" />

          {/* Featured projects */}
          <div className="mx-0.5 lg:mx-14">
            <h1 className="text-center text-2xl md:text-3xl font-bold lg:text-4xl">Featured Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-11 mt-6 md:mt-10">
              {featured.map((product) => (
                <div key={product.name} className="flex flex-col items-center">
                  <Image src={product.image} alt={product.name} className="w-full rounded-md" />
                  <h1 className="mt-4 text-xl md:text-2xl font-bold">{product.name}</h1>
                  <p className="mt-2 text-center">{product.description}</p>
                </div>
              ))}
            </div>

            <button className="border hover:bg-black hover:text-white mt-16 font-bold inline-flex items-center gap-2 border-black text-lg p-1 px-11">
              <span>View all projects</span>
              <span><FaArrowRight size="21" /></span>
            </button>
          </div>
          
          <AboutOverview/>
        </div>
      </div>
    </div>
  );
};

export default Home;



