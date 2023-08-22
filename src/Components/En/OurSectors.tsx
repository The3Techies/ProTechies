
const sectors = ["Retail, Ecommerce", "Education & e-learning", "Healthcare & Fitness", "Real Estate", "Food & Restaurant", "On-Demand Solutions"]

const sectorsHtml = sectors.map((sector, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] lg:w-[15%] md:w-[30%] w-[45%] lg:aspect-square flex flex-col items-center p-2 pb-4 mb-6">
        <img src={`/OurSectorsImgs/sector${index+1}.webp`} alt={`sector${index+1} img`} className="mb-6 h-[80px] w-[80px] " />
        <h1 className="text-[#FFF] font-bold lg:text-xl 2xl:text-2xl text-center">{sector}</h1>

    </div>
));

const OurSectors: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-6" >
            <div className="w-[90%] 2xl:w-[70%] ">

                <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-4">Serving Across All Sectors</h1>
                <p className="text-[#FFF] text-sm lg:text-base 2xl:text-lg pl-4 mb-8">At <span className="text-[#00DFC0] font-bold">ProTechies</span>, we take pride in our ability to develop applications for a vast array of industries. Whatever your industry, we have the skills and experience to build the perfect application that suits your specific demands. From conception to completion, we are here to turn your vision into reality.</p>

                <div className="flex flex-wrap justify-between ">
                    {sectorsHtml}
                </div>
            </div>
        </div>
    )
}

export default OurSectors