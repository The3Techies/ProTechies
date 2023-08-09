
const sectors = ["Retail, Ecommerce", "Education & e-learning", "Healthcare & Fitness", "Real Estate", "Food & Restaurant", "On-Demand Solutions"]

const sectorsHtml = sectors.map((sector, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] md:w-[15%] w-[45%] aspect-square flex flex-col items-center justify-center p-2 pb-4 mb-6">
        <img src={`/OurSectorsImgs/sector${index+1}.webp`} alt={`sector${index+1} img`} className="mb-6 md:w-[50%] md:h-[50%] w-[100px]" />
        <h1 className="text-[#FFF] font-bold md:text-xl 2xl:text-3xl text-center">{sector}</h1>

    </div>
));

const OurSectors: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-12 " >
            <div className="w-[90%] ">

                <h1 className="text-[#FFF] font-bold text-2xl md:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-4">Serving Across All Sectors</h1>
                <p className="text-[#FFF] text-sm md:text-base 2xl:text-lg pl-4 mb-8">At <span className="text-[#00DFC0] font-bold">ProTechies</span>, we take pride in our ability to develop applications for a vast array of industries. Whatever your industry, we have the skills and experience to build the perfect application that suits your specific demands. From conception to completion, we are here to turn your vision into reality.</p>

                <div className="flex flex-wrap justify-between ">
                    {sectorsHtml}
                </div>
            </div>
        </div>
    )
}

export default OurSectors