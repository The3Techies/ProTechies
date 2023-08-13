import { useState, useEffect } from "react";


const AboutUs: React.FC = () => {
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
          <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] lg:mt-0 mt-10 pl-4 mb-6 ">About us</h1>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Our Passion for Innovation</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">At <span className="text-[#00DFC0] font-bold">ProTechies</span>, we are a team of passionate tech enthusiasts dedicated to driving digital innovation. Our shared vision propels us forward as we strive to deliver exceptional development services that transcend imagination and bring ideas to life.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Commitment to Excellence</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">Excellence is at the core of our values. We are fueled by creativity and a relentless pursuit of customer satisfaction. Our unwavering commitment pushes us to explore cutting-edge solutions that push the boundaries of what's possible in the digital realm.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">Tailored Experiences for Success</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">With a customer-centric approach, we take pride in crafting tailored experiences that empower businesses to flourish in the dynamic digital landscape. Join us on this exhilarating journey as we collaboratively shape a brighter and more prosperous digital future. Together, let's unlock the limitless potential of technology.</p>
        </div>

      </div>
    </div>
  )
}

export default AboutUs