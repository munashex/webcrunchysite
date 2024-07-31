import Image from 'next/image'
import overview from '../images/miniOverview.png'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const AboutOverview = () => {
    return (
        <div className="my-24 lg:my-32">
            <div className="container mx-auto px-4 md:px-7 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                            A top-tier company in South Africa specializing in website design and development.
                        </h2>
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                            <Image 
                                src={overview} 
                                alt="Webcrunchy overview" 
                                layout="responsive"
                                className="transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg  leading-relaxed">
                            Webcrunchy is a comprehensive web design and development firm based in South Africa. Our team comprises seasoned website designers, developers, and digital strategists. We specialize in crafting customized, results-oriented solutions that yield tangible benefits for our clients.
                        </p>
                        <h3 className="text-2xl font-bold">
                            A seasoned and reliable digital agency
                        </h3>
                        <p className="text-lg  leading-relaxed">
                            At Webcrunchy, we excel in adapting to our clients' needs and building on any platform, making us the ideal choice for web solutions. Whether you prefer a hands-on approach or prefer to leave it to us, our priority is to enhance your ideas and achieve your goals through our expertise and experience, always aiming to add significant value to your business.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                            Learn more about us
                            <FaArrowRight/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOverview