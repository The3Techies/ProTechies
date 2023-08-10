import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-img');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
          setIsVisible(true);
          controls.start("visible");
        } else {
          setIsVisible(false);
          controls.start("hidden");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const textAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#334A5C] w-full flex justify-around bg-right">

      <div id="AboutUs" className="w-[90%] 2xl:w-[70%]  flex md:flex-row flex-col justify-between items-center py-6 gap-8 mb-10">

        <div className="md:w-[48%] w-full h-full bg-[#fff] bg-opacity-[0.12] rounded-br-full flex items-center ">
          <motion.div
            className={`bg-[url(/AboutUsImgs/image1.webp)] w-full h-full bg-contain bg-no-repeat mt-48 mb-20 animate__animated ${isVisible ? 'animate__backInLeft' : ''} about-img`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          ></motion.div>
        </div>

        <div className="md:w-[50%]">

          <motion.h1
            className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] md:mt-0 mt-10 pl-4 mb-6"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            About us
          </motion.h1>

          <motion.h1
            className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            Our Passion for Innovation
          </motion.h1>

          <motion.p
            className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            At <span className="text-[#00DFC0] font-bold">ProTechies</span>, we are a team of  passionate tech enthusiasts dedicated to driving digital innovation. Our shared vision propels us forward as we strive to deliver exceptional development services that transcend imagination and bring ideas to life.
          </motion.p>

          <motion.h1
            className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            Commitment to Excellence
          </motion.h1>

          <motion.p
            className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            Excellence is at the core of our values. We are fueled by creativity and a relentless pursuit of customer satisfaction. Our unwavering commitment pushes us to explore cutting-edge solutions that push the boundaries of what's possible in the digital realm.
          </motion.p>

          <motion.h1
            className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            Tailored Experiences for Success
          </motion.h1>

          <motion.p
            className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg"
            variants={textAnimationVariants}
            initial="hidden"
            animate={controls}
          >
            With a customer-centric approach, we take pride in crafting tailored experiences that empower businesses to flourish in the dynamic digital landscape. Join us on this exhilarating journey as we collaboratively shape a brighter and more prosperous digital future. Together, let's unlock the limitless potential of technology.
          </motion.p>

        </div>

      </div>
    </div >
  )
}

export default AboutUs