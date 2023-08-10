import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';
import OurSectors from './Components/OurSectors';
import OurProcess from './Components/OurProcess';
import OurProjects from './Components/OurProjects';
import OurTechnologies from './Components/OurTechnologies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import { SpinnerRoundOutlined } from 'spinners-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);


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

  return (
    <div className='font-inria-serif max-w-[2000px] m-auto md:p-4 bg-[#334A5C]'>
      <div className=' shadow-[0_0px_23px_0px_rgba(252,252,252,0.68)] rounded-xl'>
        <Navbar />
        <Hero />
        <AboutUs />
        <OurServices />
        <OurSectors />
        <OurProcess />
        <OurProjects />
        <OurTechnologies />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
