import { valuesData } from "../data/values"

const Values = () => {

    return (
        <div className="w-full bg-[#013220]">
         <div className="p-1 mx-2 md:mx-7 lg:mx-16 py-8 lg:py-16 mb-12 text-white"> 
           <h1 className="text-3xl font-bold  md:text-4xl lg:text-5xl">Our Values</h1>

           <div className="grid grid-cols-1  gap-y-11 gap-x-11 my-11 md:my-16 md:grid-cols-2 lg:grid-cols-3">
            {valuesData.map((value) => (
            <div key={value.id} className="space-y-2">
            <div className="hidden my-11 md:inline-flex items-center gap-2"> 
                <h1 className="font-bold">{value.id}</h1> 
                <h1 className="border w-64 lg:w-80"></h1>
            </div>
             <span>{value.icon}</span> 
             <h1 className="text-2xl font-bold">{value.name}</h1>
             <h1 className="lg:max-w-sm lg:text-lg">{value.description}</h1>
            </div>
            ))}
           </div>
         </div>
        </div>
    )
}

export default Values