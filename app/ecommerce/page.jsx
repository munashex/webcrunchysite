import ecommerce from '../images/ecommerce.jpg'
import Link from 'next/link';
import { FaArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { data1, data2, data3, data4, datafive, datasix, dataseven, dataeight, datanine} from '../data/ecommerce';
import Image from 'next/image';
import { featuredEcommerce } from '../data/Portfolio';


 
const Ecommerce = () => {

    return (
    <div className="">
     {/* only on small screens */} 
            <div className="py-9 bg-[#013220] px-8 md:hidden">
                <h1 className="text-white my-9 text-2xl font-semibold">
                Acquire an ecommerce website that boosts sales and maximizes ROI.
                </h1>
                <Link href="/porfolio" className="text-white hover:bg-white items-center inline-flex gap-2 hover:text-black font-bold border p-2 px-8 text-lg">
                    <span>View  Portfolio</span>
                    <span><FaArrowRight /></span>
                </Link>
            </div>


            <div className="hidden md:flex w-full">
                <div className="w-1/2 bg-black lg:relative">
                    <div className="mx-6 lg:mx-16 lg:absolute bottom-32 right-0 left-0">
                        <h1 className="text-white my-9 text-2xl lg:text-4xl lg:-leading-7 font-semibold md:max-w-lg max-w-xl">
                        Acquire an ecommerce website that boosts sales and maximizes ROI.
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
                <Image src={ecommerce} alt="webcrunchy" className="w-full" />
                </div>
            </div>


             {/* ecommerce service 1 */}
            <div className="space-y-16 bg-[#F3F5F8] my-11 md:my-24 lg:my-32 py-7">
          {data1.map((service, index) => (
        <div key={service.id} className='flex flex-col lg:flex-row space-y-5 lg:items-center'>
          <div className='lg:w-1/2'>
        <Image src={service.image} alt={`webcrunchy-${service.id}`} className="md:w-full" />
          </div>
          <div className="space-y-5 px-7 lg:px-24 lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-extrabold">{service.name}</h1>
            <h1>{service.description}</h1>
            <h1>{service.description1}</h1>
            <Link href="/contact" className="bg-[#F47521] hover:bg-black py-1 px-7 inline-flex gap-2 text-white font-bold text-xl items-center">
              Get A Quote <FaArrowRight color='white' />
            </Link>
          </div>
        </div>
      ))}
    </div>


      {/* ecommerce service 2 */} 
      <div className="mx-7 p-1 lg:mx-16">
        <div className="space-y-6"> 
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">What makes Webcrunchy stand out from the competition?</h1>
        <h1 className="text-center md:max-w-2xl font-semibold md:mx-auto">Creating a website design that truly comes alive requires a diverse team of skilled professionals. You can rely on us. With 4 years of experience and a proven track record, we possess deep expertise in this field.</h1>
        </div>
      </div>


      <div className="p-1 mx-7 lg:mx-16 my-11 lg:my-16">
        {data2.map((service) => (
        <div key={service.name1} className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-11"> 
            
            {/* grid item 1 */}
           <div className="space-y-9 lg:space-y-16"> 
            <div className="space-y-3"> 
              <h1 className="text-xl lg:text-2xl font-bold">{service.name1}</h1> 
              <h1>{service.description1}</h1>
            </div>

            <div className="space-y-3"> 
            <h1 className="text-xl lg:text-2xl font-bold">{service.name2}</h1> 
            <h1>{service.description2}</h1>
            </div>
           </div> 
          
            {/* grid item 2 */}
           <div className="my-7 lg:my-0"> 
             <Image src={service.image} alt="webcrunchy"/>
           </div>
            
            {/* grid item 3 */}
           <div className="space-y-9 lg:space-y-16"> 
           <div className="space-y-3"> 
              <h1 className="text-xl lg:text-2xl font-bold">{service.name3}</h1> 
              <h1>{service.description3}</h1>
            </div>

            <div className="space-y-3"> 
            <h1 className="text-xl lg:text-2xl font-bold">{service.name4}</h1> 
            <h1>{service.description4}</h1>
            </div>
           </div>
         
         </div>
        ))}
      </div>

   
    {/* service 3 */} 
    <div className="bg-black text-white"> 

     <div className="p-1 mx-7 lg:mx-16 my-16 lg:my-20">
      {data3.map((service) => (
        <div key={service.name} className="grid my-11 lg:my-20 grid-cols-1 gap-y-6  gap-x-24 lg:items-center lg:grid-cols-2"> 
          {/* grid item 1 === image  */}
          <div className=""> 
           <Image src={service.image} alt="webcrunchy"/>
          </div>
           {/* grid item 2 === description about service 3  */}
          <div className="space-y-6"> 
           <h1 className="text-2xl lg:text-4xl font-extrabold">{service.name}</h1>
           <h1>{service.description}</h1> 
           <ul className="space-y-2 list-disc marker:text-[#F57D2D]"> 
            <li className="text-lg">{service.bullet1}</li>
            <li className="text-lg">{service.bullet2}</li>
            <li className="text-lg">{service.bullet3}</li>
           </ul>
          </div>
        </div>
      ))}
     </div> 

    </div>
      

      {/* service 4  */}
      <div className="p-1 mx-7 lg:mx-16"> 
        <h1 className="text-2xl lg:text-4xl font-bold md:max-w-4xl">Gain access to all the cutting-edge features that will propel your ecommerce store to unprecedented levels of success.</h1>
        
        <div className="my-16  grid grid-cols-1  md:grid-cols-2 gap-y-11 md:gap-y-16 md:gap-x-11">
          {data4.map((service) => (
            <div key={service.name} className="space-y-2 flex flex-col items-center md:items-start md:flex-row md:gap-x-6 lg:gap-x-9"> 
              <Image src={service.image} alt="webcrunchy"/> 
              <div className="space-y-3"> 
                <h1 className="text-xl lg:text-2xl font-bold text-center md:text-start">{service.name}</h1> 
                <h1 className="lg:max-w-md text-center md:text-start">{service.description}</h1>
              </div>
            </div>
          ))}
        </div>
      
      </div>


     {/* service 5 */}
    <div className="bg-black py-11 md:py-16 lg:py-20 my-5 md:my-16">
    <div className="p-1 mx-7 lg:mx-16">
    <h1 className="text-white text-2xl lg:text-4xl font-bold text-center">Our approach to designing ecommerce websites</h1>
    
    {/* service 5 cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded mt-9 md:mt-12 gap-6">
     {datafive.map((item) => (
      <div key={item.id} className={`bg-white px-5 shadow py-8 space-y-3 ${item.id % 2 === 1 ? 'border-[#1619d1cb] border-l-4': 'border-[#FF0800] border-l-4'}`}> 
      <h1 className={`text-3xl font-bold ${item.id % 2 === 1 ? 'text-[#1619d1cb]': 'text-[#FF0800]'}`}>{item.num}</h1>
      <h1 className="font-bold text-xl">{item.name}</h1>
      <h1>{item.description}</h1>
      </div>
     ))}
    </div> 

  </div>
</div>

 {/* service 6 */}
 <div className="space-y-16 bg-[#F3F5F8] my-11 md:my-24 lg:my-32 py-7">
          {datasix.map((service, index) => (
        <div key={service.id} className='flex flex-col lg:flex-row space-y-5 lg:items-center'>
          <div className='lg:w-1/2 order-2'>
        <Image src={service.image} alt={`webcrunchy-${service.id}`} className="md:w-full" />
          </div>
          <div className="space-y-5 px-7 lg:px-24 lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-extrabold">{service.name}</h1>
            <h1>{service.description}</h1>
            <h1>{service.description1}</h1>
            <Link href="/contact" className="bg-[#F47521] hover:bg-black py-1 px-7 inline-flex gap-2 text-white font-bold text-xl items-center">
              Get A Quote <FaArrowRight color='white' />
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="mx-2 md:mx-7 lg:mx-16 p-1  bg-[#FEEEE1] my-11  border border-[#F47521] rounded-xl">
     <div className="flex flex-col py-11 md:py-20  items-center md:flex-row md:px-9  md:justify-between gap-y-11">
      <div className="space-y-3  md:max-w-xl lg:max-w-3xl">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-center md:text-start">Considering an online business model?</h1>
        <h1 className="text-center md:text-start px-1 md:px-0">Create a website your customers will love to shop on. With our extensive expertise, you can rely on us for top-notch custom web design services.</h1>
      </div> 
      <Link href="/contact" className="text-lg bg-[#F47521] hover:bg-black py-2 px-9 font-bold text-white inline-flex items-center gap-2">Get A Quote <FaArrowRight size={22}/></Link>
     </div>
    </div>


    {/* service 7  */} 
    <div className="p-1 mx-7 lg:mx-16 my-16 md:my-20 lg:my-28">

     <div className="space-y-3">
       <h1 className="text-2xl  lg:text-4xl font-bold text-center">Platforms we support</h1>
       <h1 className="text-center text-lg">We collaborate with leading ecommerce platforms in today's market. Select the one that best suits your needs.</h1>
     </div> 

     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-9 mt-16">
      {dataseven.map((service) => (
        <div key={service.name} className="py-7 px-2 lg:px-9 space-y-9  odd:bg-[#1199C4] rounded-lg even:bg-black"> 
          <Image src={service.image} alt="webcrunchy"/>
          <div className="space-y-4 text-white"> 
            <h1 className="text-xl font-bold">{service.name}</h1> 
            <h1 className="font-bold">{service.description}</h1>
          </div>
        </div>
      ))}
     </div>

    </div>

    {/* service 8 */} 
    <div className="bg-black py-11 md:py-16"> 
    <div className="p-1 mx-7 lg:mx-16 text-white"> 
        <h1 className="text-2xl lg:text-4xl font-bold text-center">A comprehensive ecommerce agency</h1>
        
        <div className="my-16  grid grid-cols-1  md:grid-cols-2 gap-y-11 md:gap-y-16 md:gap-x-11">
          {dataeight.map((service) => (
            <div key={service.name} className="space-y-2 flex flex-col items-center md:items-start md:flex-row md:gap-x-6 lg:gap-x-9"> 
              <Image src={service.image} alt="webcrunchy"/> 
              <div className="space-y-3"> 
                <h1 className="text-xl lg:text-2xl font-bold text-center md:text-start">{service.name}</h1> 
                <h1 className="lg:max-w-md text-center md:text-start">{service.description}</h1>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>


    {/* service 9 */} 
    <div className="mx-7 p-1 lg:mx-16 my-11 lg:my-20"> 
      <div className="space-y-4"> 
       <h1 className="text-center font-bold text-2xl lg:text-4xl">Seamless integration with your preferred tools</h1>
        <h1 className="text-center md:max-w-4xl md:text-lg md:mx-auto">Don't give up your favorite tools for a new ecommerce site. Whether it’s accounting software, a CRM, inventory management, or a POS, we can integrate it seamlessly. We specialize in complex software and API integrations to save you time and streamline your workflow.</h1>
       </div> 

       <div className="mt-11 lg:mt-16">
        {datanine.map((service) => (
          <div key={service.name1} className="grid grid-cols-1 gap-y-11 items-center lg:grid-cols-2"> 
             {/* grid item 1 */}
             <Image src={service.image} alt="webcrunchy"/>
              
              {/* grid item 2 */}
             <div className="space-y-9 lg:bg-[#F3F5F8] lg:px-24 lg:py-7 rounded-xl">
             <div className="space-y-3"> 
               <h1 className="text-xl lg:text-2xl font-bold">{service.name1}</h1>
                <h1 className="lg:max-w-lg">{service.description1}</h1>
             </div>
             <div className="space-y-3"> 
               <h1 className="text-xl lg:text-2xl font-bold">{service.name2}</h1>
                <h1 className="lg:max-w-lg">{service.description2}</h1>
             </div>
             <div className="space-y-3"> 
               <h1 className="text-xl lg:text-2xl font-bold">{service.name3}</h1>
                <h1 className="lg:max-w-lg">{service.description3}</h1>
             </div>
             </div>
          </div>
        ))}
       </div>
    </div>


    {/* featured ecommerce projects */}
    <div className="bg-black px-4 lg:px-24 py-8 lg:py-12 my-12 md:my-16 text-white">
      <h1 className="text-3xl font-bold lg:text-4xl mb-8">Featured Ecommerce Website Projects</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    {featuredEcommerce.map((project) => (
      <div key={project.name} className="bg-white  overflow-hidden">
        <Image src={project.image} className="w-full h-auto" alt={project.name} />
        <div className="p-4 text-black">
          <h1>Ecommerce</h1>
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


     <div className="mx-2 md:mx-7 lg:mx-16 p-1  bg-[#FEEEE1] my-24  border border-[#F47521] rounded-xl">
     <div className="flex flex-col py-11 md:py-20  items-center md:flex-row md:px-9  md:justify-between gap-y-11">
      <div className="space-y-3  md:max-w-xl lg:max-w-3xl">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-center md:text-start">Considering an online business model?</h1>
        <h1 className="text-center md:text-start px-1 md:px-0">Create a website your customers will love to shop on. With our extensive expertise, you can rely on us for top-notch custom web design services.</h1>
      </div> 
      <Link href="/contact" className="text-lg bg-[#F47521] hover:bg-black py-2 px-9 font-bold text-white inline-flex items-center gap-2">Get A Quote <FaArrowRight size={22}/></Link>
     </div>
    </div>
</div>
    )
}

export default Ecommerce