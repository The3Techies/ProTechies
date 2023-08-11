import 'animate.css';
import { scroller } from 'react-scroll';

const handleScrollToComponent = () => {

    scroller.scrollTo("contact", {
      duration: 800,
      offset: -100,
      smooth: true,
    });
  };

const HeroRu: React.FC = () => {

    return (
        <div className="bg-[#334A5C] md:w-full md:h-screen flex justify-around ">
            <div id="Hero" className="w-[90%] 2xl:w-[70%] flex flex-col md:flex-row justify-center items-center mt-10 md:mt-0">

                <div className="md:w-[50%] md:h-full h-full bg-[url(/HeroImgs/bg.webp)] bg-no-repeat bg-contain flex flex-col justify-center animate__animated animate__rollIn">
                    <h1 className="text-[#00DFC0] md:text-2xl 2xl:text-4xl font-bold mb-4 animate__animated">Превращение видений в реальность</h1>
                    <p className="text-[#D8E0E1] text-sm 2xl:text-lg max-w-[90%] md:mb-10 mb-4 ">В <span className="text-[#00DFC0] font-bold hover:text-blue-400 cursor-pointer"><a href="https://protechies.netlify.app/" rel="noopener noreferrer">ProTechies</a></span> мы создаём трансформационные цифровые решения. Наши опытные разработчики создают безупречные веб-приложения, мощные мобильные впечатления и революционное программное обеспечение, соответствующее вашим потребностям. Объединяйтесь с нами, чтобы об embrace будущее технологий!</p>
                    <h1 className="bg-[#00DFC0] cursor-pointer w-fit px-12 py-4 text-xl 2xl:text-3xl rounded-3xl font-bold transform transition-transform md:hover:scale-125 hover:scale-110 hover:bg-[#00A89C] hover:transition  hover:duration-1000 hover:text-white" onClick={()=>handleScrollToComponent()}>Контакты</h1>
                </div>

                <div className="md:w-[50%] md:h-auto w-[350px] h-[350px] aspect-square animate__animated animate__backInDown mt-4 md:mt-0 bg-[url(/HeroImgs/HeroMainImgMobile.webp)] md:bg-[url(/HeroImgs/HeroMainImgDesktop.webp)] bg-contain bg-no-repeat bg-center" > </div>

            </div>
        </div>
    )
}

export default HeroRu