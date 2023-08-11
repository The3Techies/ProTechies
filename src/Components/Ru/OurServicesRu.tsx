
interface SectionData {
    name: string;
    discretion: string;
}

const services: SectionData[] = [
    {
        name: "Разработка приложений",
        discretion: "Мы создаем стильные и удобные мобильные приложения для Android и iOS с последними функциями, обеспечивая плавное и современное пользовательское взаимодействие."
    },
    {
        name: "Разработка веб-сайтов",
        discretion: "Мы создаем увлекательные веб-сайты с интуитивной навигацией, обеспечивая исключительный онлайн-опыт под ваши потребности."
    },
    {
        name: "Девопс",
        discretion: "Ускорьте разработку ПО с помощью наших эффективных решений DevOps для бесперебойного сотрудничества и быстрого развертывания."
    },
]

const servicesHtml = services.map((section, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] md:w-[31%] flex flex-col items-center  px-2 py-6">

        <img src={`/OurServicesImgs/service${index+1}.webp`} alt={`service${index+1} img`} className="h-24 aspect-square mb-6" />
        <h1 className="text-[#FFF] font-bold text-xl md:text-3xl  text-center mb-6 w-full px-12">{section.name}</h1>
        <p className="text-[#FFF] text-sm md:text-base 2xl:text-lg text-center">{section.discretion}</p>

    </div>
))

const OurServicesRu: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around " >
            <div id="OurServices" className="w-[90%] 2xl:w-[70%] mb-12">

                <h1 className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-10">Наши услуги</h1>

                <div className="flex justify-between md:flex-row flex-col gap-6">
                    {servicesHtml}
                </div>

            </div>
        </div>
    )
}

export default OurServicesRu