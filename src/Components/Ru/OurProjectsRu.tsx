
interface SectionData {
    name: string;
    textColor: string;
    bgColor: string;
    img: string;
}

const projects: SectionData[] = [
    {
        name: "Ali AlNono",
        textColor: 'text-[#DF3030]',
        bgColor: "bg-[#DF3030]",
        img: "/OurProjectsImgs/AliAlNono.webp",
    },
    {
        name: "Al Mahaqeri",
        textColor: "text-[#F77F00]",
        bgColor: "bg-[#F77F00]",
        img: "/OurProjectsImgs/AlMahaqeri.webp",
    },
    {
        name: "crystallpool",
        textColor: "text-[#08F]",
        bgColor: "bg-[#08F]",
        img: "/OurProjectsImgs/crystallpool.webp",
    },
    {
        name: "To Ru",
        textColor: "text-[#214966]",
        bgColor: "bg-[#214966]",
        img: "/OurProjectsImgs/toru.webp",
    },
    {
        name: "Mochahunters",
        textColor: "text-[#000]",
        bgColor: "bg-[#000]",
        img: "/OurProjectsImgs/mochahunters.webp",
    }
]


const projectsHtml = projects.map((section, index) => (
    <div key={index} className="relative bg-SecondaryBg bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px] shadow-Highlight lg:w-[31.8%] md:w-[47%] w-full aspect-[1/0.7] px-2 cursor-pointer " >
        <h1 className={`text-3xl 2xl:text-5xl z-10  relative ` + section.textColor}>{section.name}</h1>
        <div className={"absolute left-1 top-1 w-[60%] z-0 aspect-square rounded-full bg-opacity-30 " + section.bgColor}></div>
        <img src={section.img} alt="" className="absolute object-cover w-[280px] h-[170px] 2xl:w-[330px] 2xl:h-[200px] right-3 bottom-3 rounded-2xl " />
    </div>
))

const OurProjectsRu: React.FC = () => {
    return (
        <div className="bg-PrimaryBg w-full flex justify-around pt-10 " id="Projects" >
            <div className="w-[90%] 2xl:w-[70%] mb-10">

                <h1 className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-l-[5px] border-Highlight pl-4 mb-4">Наши проекты</h1>
                <p className="text-[#FFF] text-sm 2xl:text-lg pl-4 mb-8">Здесь вы можете найти несколько примеров, как мы успешно помогли компаниям преодолеть свои трудности и проблемные моменты.</p>

                <div className="flex justify-around flex-wrap gap-y-4">
                    {projectsHtml}
                </div>

            </div>
        </div>
    )
}

export default OurProjectsRu