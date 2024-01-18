import { useState, useEffect } from 'react';
import './index.css';

import {
  Navbar, Hero, AboutUs, OurServices, OurSectors,
  OurProcess, OurProjects, OurTechnologies, ContactUs, Footer,
  NavbarAr, HeroAr, AboutUsAr, OurServicesAr, OurSectorsAr,
  OurProcessAr, OurProjectsAr, OurTechnologiesAr, ContactUsAr, FooterAr,
  NavbarRu, HeroRu, AboutUsRu, OurServicesRu, OurSectorsRu,
  OurProcessRu, OurProjectsRu, OurTechnologiesRu, ContactUsRu, FooterRu,} 
  from './Components/index-d.ts';

import { SpinnerRoundOutlined } from 'spinners-react';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <SpinnerRoundOutlined className="loading-spinner" size={120} />
      </div>
    );
  }

  let AppComponents;

  if (selectedLanguage === 'EN') {
    AppComponents = (
      <div className=' shadow-[0_0px_23px_0px_rgba(252,252,252,0.68)] rounded-xl'>
        <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <Hero />
        <AboutUs />
        <OurServices />
        <OurSectors />
        <OurProcess />
        <OurProjects />
        <OurTechnologies />
        <ContactUs />
        <Footer />
      </div>)
  } else if (selectedLanguage === 'AR') {
    AppComponents = (
      <div className=' shadow-[0_0px_23px_0px_rgba(252,252,252,0.68)] rounded-xl'>
        <NavbarAr selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <HeroAr />
        <AboutUsAr />
        <OurServicesAr />
        <OurSectorsAr />
        <OurProcessAr />
        <OurProjectsAr />
        <OurTechnologiesAr />
        <ContactUsAr />
        <FooterAr />
      </div>)
  } else if (selectedLanguage === 'RU') {
    AppComponents = (
      <div className=' shadow-[0_0px_23px_0px_rgba(252,252,252,0.68)] rounded-xl'>
        <NavbarRu selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <HeroRu />
        <AboutUsRu />
        <OurServicesRu />
        <OurSectorsRu />
        <OurProcessRu />
        <OurProjectsRu />
        <OurTechnologiesRu />
        <ContactUsRu />
        <FooterRu />
      </div>)
  }

  return (
    <div className='font-inria-serif max-w-[2000px] m-auto md:p-4 bg-PrimaryBg'>
      {AppComponents}
    </div>
  );
}

export default App;
