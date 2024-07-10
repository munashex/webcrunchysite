import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const videoUrl = "https://res.cloudinary.com/ditls34gp/video/upload/v1720525805/vhptrt7mjlyxhdah2dia.mp4";

  return (
    <div>
        {/* video background component */}
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
            <h1 className="text-white text-xl md:text-xl lg:text-2xl">Web Design & Development Agency</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">We create exceptional websites and reliable software solutions.</h1>
          </div>
          <button className="text-lg inline-flex items-center gap-x-3  font-bold border-2  text-white  p-1 px-6 hover:bg-white  hover:text-black">
            <span>View Portfolio</span>
            <span><FaArrowRight size="21"/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
