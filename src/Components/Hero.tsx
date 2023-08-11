
import 'animate.css'; 

const Hero: React.FC = () => {
    return (
        <div className="bg-[#334A5C] md:w-full h-screen flex justify-around ">
            <div id="Hero" className="w-[90%] 2xl:w-[70%]  flex flex-col md:flex-row justify-center items-center ">

                <div className="md:w-[50%] md:h-full h-full bg-[url(/HeroImgs/bg.webp)] bg-no-repeat bg-contain flex flex-col justify-center animate__animated animate__rollIn">
                    <h1 className="text-[#00DFC0] md:text-2xl 2xl:text-4xl font-bold mb-4 animate__animated">Transforming Visions into Reality</h1>
                    <p className="text-[#D8E0E1] text-sm 2xl:text-lg max-w-[90%] mb-10 ">At <span className="text-[#00DFC0] font-bold hover:text-blue-400 cursor-pointer"><a href="https://protechies.netlify.app/" rel="noopener noreferrer">ProTechies</a></span>, we create transformative digital solutions. Our expert developers craft seamless web applications, powerful mobile experiences, and groundbreaking software tailored to your needs. Embrace the future of technology with us!</p>
                    <h1 className="bg-[#00DFC0] cursor-pointer w-fit px-12 py-4 text-xl 2xl:text-3xl rounded-3xl font-bold transform transition-transform md:hover:scale-125 hover:scale-110 hover:bg-[#00A89C] hover:transition  hover:duration-1000 hover:text-white">Contact Us</h1>
                </div>

                <img src="/HeroImgs/HeroMainImg.webp" alt="HeroMainImg" className="md:w-[50%] aspect-square animate__animated animate__backInDown" />

            </div>
        </div>
    )
}

export default Hero