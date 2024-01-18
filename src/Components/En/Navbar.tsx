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

interface MyComponentProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

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


const Navbar: React.FC<MyComponentProps> = ({ selectedLanguage, setSelectedLanguage }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const handleScrollToComponent = (componentId: string , offsetValue : number) => {

    scroller.scrollTo(componentId, {
      duration: 800,
      offset: offsetValue,
      smooth: true,
    });
  };

  const languages = ['AR', 'EN', 'RU'];
  const [showLanguageList, setShowLanguageList] = useState(false);

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageList(false);
  };

  const htmlLanguageList = (
    <div className='flex items-center gap-2 select-none'>
      <p className='text-[#FFF] w-6'>{selectedLanguage}</p>
      <div className=' rounded-full border-[1px] p-1 cursor-pointer'
        onClick={() => setShowLanguageList(!showLanguageList)}
      >
        {iconSetLanguage}
      </div>
      {showLanguageList && (
        <ul className="absolute top-14 bg-PrimaryBg w-28 text-white ">
          {languages.map((language) => (
            <li
              key={language}
              className={`cursor-pointer py-1 ${selectedLanguage === language ? 'text-Highlight' : 'hover:text-Highlight'
                }`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}{' '}
              {selectedLanguage === language && (
                <span className="ml-4">&#10003;</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <nav className="bg-transparent backdrop-filter backdrop-blur-lg  py-6  sticky top-0 z-50 md:rounded-tl-xl md:rounded-tr-xl flex justify-center">
      <div className='w-[90%] 2xl:w-[70%]'>
        <div className="flex justify-between items-center ">

          <p className="text-[#FFF] md:text-2xl text-xl font-Gravitas-One cursor-pointer" onClick={() => handleScrollToComponent("Hero" ,-100)}><span className='text-Highlight'>PRO</span>TECHIES</p>

          <div className="hidden lg:flex items-center tracking-widest gap-4 2xl:gap-10 ">
            {btns.map((btn, index) => (
              <p
                key={index}
                onClick={() => handleScrollToComponent(btn.componentId , -100)}
                className={`cursor-pointer 2xl:text-xl ${index === btns.length - 1 ? ' bg-Highlight text-[#000] py-2 px-4 rounded-md hover:text-white ' : ' hover:text-Highlight text-white'}`}
              >
                {btn.name}
              </p>
            ))}

            {htmlLanguageList}

          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex justify-between gap-2">

            {htmlLanguageList}

            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              title="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg width="28px" height="28px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></g></svg>) : (
                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff"></path> </g></svg>
              )}
            </button>
          </div>
        </div>

        {/*Responsive Menu*/}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            {btns.map((btn, index) => (
              <a
                key={index}
                onClick={() => {
                  toggleMenu();
                  handleScrollToComponent(btn.componentId , -500);
                }}
                className={`block text-white hover:text-gray-200 py-4 px-4 ${index === btns.length - 1 ? ' bg-Highlight' : ''}`}
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
