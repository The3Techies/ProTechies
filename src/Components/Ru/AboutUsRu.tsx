import { useState, useEffect } from "react";


const AboutUsRu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-img'); 
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="bg-[#334A5C] w-full flex justify-around bg-right">
      <div id="AboutUs" className="w-[90%] 2xl:w-[70%]  flex lg:flex-row flex-col justify-between items-center py-6 gap-8 mb-10">

        <div className="lg:w-[48%] w-full h-full bg-[#fff] bg-opacity-[0.12] rounded-br-full items-center hidden lg:flex">
          <div
            className={`bg-[url(/AboutUsImgs/image1.webp)] w-full h-full bg-contain bg-no-repeat mt-48 mb-20 animate__animated ${isVisible ? 'animate__backInLeft' : ''
              } about-img`}
          ></div>
        </div>

        <div className="lg:w-[50%] ">
          <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] lg:mt-0 mt-10 pl-4 mb-6 ">О нас</h1>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Наша страсть к инновациям</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">В <span className="text-[#00DFC0] font-bold">ProTechies</span> Мы - команда преданных страстным энтузиастам технологий, нацеленных на стимулирование цифровых инноваций. Наша общая миссия двигает нас вперёд, поскольку мы стремимся предоставлять выдающиеся услуги разработки, превосходящие воображение и воплощающие идеи в жизнь.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Обязанность перед совершенством</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">Превосходство — в самой сущности наших ценностей. Нас питает творчество и непреклонное стремление к удовлетворению клиентов. Наша неизменная приверженность побуждает нас исследовать передовые решения, расширяющие границы того, что возможно в цифровой сфере.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Индивидуальные опыты для успеха</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">С ориентированным на клиента подходом, мы гордимся созданием индивидуальных опытов, которые позволяют бизнесам процветать в динамичном цифровом пространстве. Присоединяйтесь к нам в этом захватывающем путешествии, в ходе которого мы совместно формируем более светлое и процветающее цифровое будущее. Вместе давайте разблокируем бесконечный потенциал технологий.





</p>
        </div>

      </div>
    </div>
  )
}

export default AboutUsRu