interface SectionData {
    name: string;
    discretion: string;
}

const process: SectionData[] = [
    {
        name: "1. Requirement Gathering",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "2. UI/UX Design",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "3. Prototype",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "4. Development",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "5. Quality Assurance",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "6. Deployment",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "7. Support & Maintenance",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    
]

const processHtml = process.map((section, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] md:w-[24%] aspect-square flex flex-col items-center  px-2 py-6 ">

        <img src={`/OurProcessImgs/proces${index+1}.webp`} alt={`proces${index+1} img`} className="w-[100px] h-[100px] mb-4 " />
        <h1 className="text-[#FFF] font-bold md:text-2xl 2xl:text-4xl text-center mb-4 ">{section.name}</h1>
        <p className="text-[#FFF] text-sm 2xl:text-lg text-center">{section.discretion}</p>

    </div>
))

const OurProcessRu: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-12 " >
            <div className="w-[90%] 2xl:w-[70%] mb-6">

                <h1 className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-10">Process We Follow</h1>

                <div className="flex flex-col md:flex-row gap-y-6 md:gap-8 justify-between">
                    {processHtml[0]}
                    {processHtml[1]}
                    {processHtml[2]}
                    {processHtml[3]}
                </div>
                
                <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-10 justify-center mt-6">
                    {processHtml[4]}
                    {processHtml[5]}
                    {processHtml[6]}
                </div>

            </div>
        </div>
    )
}

export default OurProcessRu