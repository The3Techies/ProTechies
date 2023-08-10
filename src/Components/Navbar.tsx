import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { motion, useScroll } from "framer-motion"

const iconSetLanguage = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <g clipRule="url(#clip0_16_283)">
    <path d="M12.8269 3.36818C12.5962 3.11972 12.222 3.11968 11.9913 3.36822L6.50014 9.28144L1.00874 3.36818C0.778011 3.11972 0.403847 3.11968 0.173077 3.36822C-0.0576924 3.61673 -0.0576924 4.0196 0.173077 4.2681L6.08233 10.6313C6.19314 10.7506 6.34343 10.8176 6.50014 10.8176C6.65685 10.8176 6.80717 10.7506 6.91795 10.6312L12.8269 4.26806C13.0577 4.0196 13.0577 3.61668 12.8269 3.36818Z" fill="white" />
  </g>
  <defs>
    <clipPath id="clip0_16_283">
      <rect width="13" height="14" fill="white" />
    </clipPath>
  </defs>
</svg>

interface NavButton {
  name: string;
  componentId: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const btns: NavButton[] = [
    {
      name: 'Home',
      componentId: 'Hero',
    },
    {
      name: 'About',
      componentId: 'AboutUs',
    },
    {
      name: 'Services',
      componentId: 'OurServices',
    },
    {
      name: 'Portfolio',
      componentId: 'Projects',
    },
    {
      name: 'Contact Us',
      componentId: 'contact',
    },
  ];

  const handleScrollToComponent = (componentId: string) => {
    const offsetValue = -100

    scroller.scrollTo(componentId, {
      duration: 800,
      offset: offsetValue,
      smooth: true,
    });
  };

  return (
    <nav className="bg-[#334A5C]  py-6  sticky top-0 z-50 md:rounded-tl-xl md:rounded-tr-xl flex justify-center">
      <div className='w-[90%] 2xl:w-[70%]'>
        <div className="flex justify-between items-center ">

          <p className="text-[#FFF] md:text-2xl text-xl font-Gravitas-One cursor-pointer" onClick={() => handleScrollToComponent("Hero")}><span className='text-[#00DFC0]'>PRO</span>TECHIES</p>

          <div className="hidden lg:flex items-center tracking-widest gap-4 2xl:gap-10">
            {btns.map((btn, index) => (
              <p
                key={index}
                onClick={() => handleScrollToComponent(btn.componentId)}
                className={`cursor-pointer 2xl:text-xl ${index === btns.length - 1 ? ' bg-[#00DFC0] text-[#000] py-2 px-4 rounded-md hover:text-white ' : ' hover:text-[#00DFC0] text-white'}`}
              >
                {btn.name}
              </p>
            ))}

            <div className='flex items-center gap-2'>
              <p className='text-[#FFF]'>En</p>
              <div className=' rounded-full border-[1px] p-1 cursor-pointer'>{iconSetLanguage}</div>
            </div>

          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              title="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M3.354 3.354a.5.5 0 0 1 .792-.792L8 7.207l3.854-3.855a.5.5 0 0 1 .708.708L8.707 8l3.855 3.854a.5.5 0 0 1-.708.708L8 8.707l-3.854 3.855a.5.5 0 0 1-.708-.708L7.293 8 3.438 4.146a.5.5 0 0 1 .708-.708z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            {btns.map((btn, index) => (
              <a
                key={index}
                onClick={() => {
                  toggleMenu();
                  handleScrollToComponent(btn.componentId);
                }}
                className={`block text-white hover:text-gray-200 py-4 px-4 ${index === btns.length - 1 ? ' bg-[#00DFC0]' : ''}`}
              >
                {btn.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <motion.div
        className="progress-bar "
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navbar;
