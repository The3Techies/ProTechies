import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import OurServices from './Components/OurServices'
import Sectors from './Components/Sectors'
import Process from './Components/Process'
import Projects from './Components/Projects'


function App() {
  return (
    <div className=' font-serif max-w-[2000px] m-auto '>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <Sectors />
      <Process />
      <Projects />
    </div>
  )
}

export default App
