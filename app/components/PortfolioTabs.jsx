import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {developments, ecommerce, webdesign, webdevelopment} from '../data/Portfolio'; 

import Image from 'next/image'

const PortfolioTabs = () => {
    return (
        <div className="w-full bg-[#F3F3F3]">
        <div className="p-1 mx-7 space-y-8 lg:mx-16 py-8 md:py-16 lg:py-20">
            <Tabs>
                <TabList className="border-none md:sticky bg-[#F3F3F3] bg-opacity-90 rounded-xl max-w-2xl mx-auto p-2 w-[90%] top-8 right-0 left-0 flex flex-col gap-x-8 lg:gap-x-11 md:flex-row items-center gap-y-3 text-gray-800">
                    <Tab className="md:text-lg focus:outline-none cursor-pointer font-bold" selectedClassName="border-b-2 border-[#0000FF] text-[#0000FF] font-extrabold">Development</Tab>
                    <Tab className="md:text-lg focus:outline-none cursor-pointer font-bold" selectedClassName="border-b-2 border-[#0000FF] text-[#0000FF] font-extrabold">Ecommerce</Tab>
                    <Tab className="md:text-lg focus:outline-none cursor-pointer font-bold" selectedClassName="border-b-2 border-[#0000FF] text-[#0000FF] font-extrabold">Web Design</Tab>
                    <Tab className="md:text-lg focus:outline-none cursor-pointer font-bold" selectedClassName="border-b-2 border-[#0000FF] text-[#0000FF] font-extrabold">Web Development</Tab>
                </TabList>
                
        <TabPanel>
        <div className="space-y-16 md:mx-16 lg:mx-20 my-11 md:my-16">
          {developments.map((project, index) => (
            <div key={project.name} className="shadow flex flex-col lg:flex-row bg-white">
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={project.image} alt={`webcrunchy/${project.name}`} className="w-full" />
              </div>
              <div className="p-5 lg:py-16 space-y-4 lg:w-1/2 lg:space-y-8">
                <h1>ECOMMERCE</h1>
                <div className="space-y-2 lg:space-y-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{project.name}</h1>
                  <h1>{project.description}</h1>
                </div>
                <div className="border border-slate-200 my-4 lg:my-0" />
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Technology</h1>
                    <h1>{project.tech}</h1>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Industry</h1>
                    <h1>{project.industry}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="space-y-16 md:mx-16 lg:mx-20 my-11 md:my-16">
          {ecommerce.map((project, index) => (
            <div key={project.name} className="shadow flex flex-col lg:flex-row bg-white">
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={project.image} alt={`webcrunchy/${project.name}`} className="w-full" />
              </div>
              <div className="p-5 lg:py-16 space-y-4 lg:w-1/2 lg:space-y-8">
                <h1>ECOMMERCE</h1>
                <div className="space-y-2 lg:space-y-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{project.name}</h1>
                  <h1>{project.description}</h1>
                </div>
                <div className="border border-slate-200 my-4 lg:my-0" />
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Technology</h1>
                    <h1>{project.tech}</h1>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Industry</h1>
                    <h1>{project.industry}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="space-y-16 md:mx-16 lg:mx-20 my-11 md:my-16">
          {webdesign.map((project, index) => (
            <div key={project.name} className="shadow flex flex-col lg:flex-row bg-white">
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={project.image} alt={`webcrunchy/${project.name}`} className="w-full" />
              </div>
              <div className="p-5 lg:py-16 space-y-4 lg:w-1/2 lg:space-y-8">
                <h1>WEB DESIGN</h1>
                <div className="space-y-2 lg:space-y-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{project.name}</h1>
                  <h1>{project.description}</h1>
                </div>
                <div className="border border-slate-200 my-4 lg:my-0" />
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Technology</h1>
                    <h1>{project.tech}</h1>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Industry</h1>
                    <h1>{project.industry}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="space-y-16 md:mx-16 lg:mx-20 my-11 md:my-16">
          {webdevelopment.map((project, index) => (
            <div key={project.name} className="shadow flex flex-col lg:flex-row bg-white">
              <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image src={project.image} alt={`webcrunchy/${project.name}`} className="w-full" />
              </div>
              <div className="p-5 lg:py-16 space-y-4 lg:w-1/2 lg:space-y-8">
                <h1>WEB DESIGN, WEB DEVELOPMENT</h1>
                <div className="space-y-2 lg:space-y-3">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{project.name}</h1>
                  <h1>{project.description}</h1>
                </div>
                <div className="border border-slate-200 my-4 lg:my-0" />
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Technology</h1>
                    <h1>{project.tech}</h1>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold">Industry</h1>
                    <h1>{project.industry}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
               
            </Tabs>
        </div>
        </div>
    );
}

export default PortfolioTabs;

