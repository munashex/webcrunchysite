import Image from 'next/image'
import overview from '../images/miniOverview.png'
import Link from 'next/link'


const AboutOverview = () => {

    return (
        <div className="grid grid-cols-1 mb-20  lg:grid-cols-2  mt-20 gap-y-16 gap-x-24">

        <div className="space-y-3">
        <h1 className="text-2xl font-bold">A top-tier company in South Africa specializing in website design and development.</h1>
        <Image src={overview} alt="webcrunchy"/>
        </div>

        <div className="space-y-3 lg:space-y-6">
         <h1 className="lg:text-lg">Webcrunchy is a comprehensive web design and development firm based in South Africa. Our team comprises seasoned website designers, developers, and digital strategists. We specialize in crafting customized, results-oriented solutions that yield tangible benefits for our clients. Since our inception in 2019, we've collaborated with numerous clients, earning a reputation as a trusted provider of online solutions for businesses across South Africa.</h1>
          <h1 className="text-2xl font-bold">A seasoned and reliable digital agency</h1>
          <h1 className="lg:text-lg">At Webcrunchy, we excel in adapting to our clients' needs and building on any platform, making us the ideal choice for web solutions. Whether you prefer a hands-on approach or prefer to leave it to us, our priority is to enhance your ideas and achieve your goals through our expertise and experience, always aiming to add significant value to your business.</h1>
          <Link href="/about" className=" font-thin underline decoration-clone underline-offset-4 text-blue-700 hover:text-[#E34234]">Learn more</Link>
        </div>

        </div>
    )
}

export default AboutOverview