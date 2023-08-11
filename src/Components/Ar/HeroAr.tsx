import 'animate.css';


const HeroAr: React.FC = () => {

  return (
    <div className="bg-[#334A5C] md:w-full md:h-screen flex flex-row-reverse justify-around ">
      <div id="Hero" className="w-[90%] 2xl:w-[70%] flex flex-col md:flex-row justify-center items-center mt-10 md:mt-0">

        <div className="md:w-[50%] md:h-full h-full bg-[url(/HeroImgs/bg.webp)] bg-no-repeat bg-contain flex flex-col justify-center animate__animated animate__rollIn ">
          <h1 className="text-[#00DFC0] md:text-2xl 2xl:text-4xl font-bold mb-4 animate__animated max-w-[90%] text-right ">تحويل الرؤى والأفكار إلى حقيقة</h1>
          <p className="text-[#D8E0E1] text-sm 2xl:text-lg max-w-[90%] md:mb-10 mb-4 text-right">في <span className="text-[#00DFC0] font-bold hover:text-blue-400 cursor-pointer"><a href="https://protechies.netlify.app/" rel="noopener noreferrer">بروتيكيز</a></span>، نقدم حلاول رقمية محورية. يقوم مطورونا المحترفون بإنشاء تطبيقات ويب سلسة، وتجارب جوال قوية، وبرمجيات مبتكرة مصممة وفقًا لاحتياجاتك. اعتنق مستقبل التكنولوجيا معنا!</p>
          <h1 className="bg-[#00DFC0] cursor-pointer w-fit px-12 py-4 text-xl 2xl:text-3xl rounded-3xl font-bold transform transition-transform md:hover:scale-125 hover:scale-110 hover:bg-[#00A89C] hover:transition  hover:duration-1000 hover:text-white">تواصل معنا</h1>
        </div>

        <div className="md:w-[50%] md:h-auto w-[350px] h-[350px] aspect-square animate__animated animate__backInDown mt-4 md:mt-0 bg-[url(/HeroImgs/HeroMainImgMobile.webp)] md:bg-[url(/HeroImgs/HeroMainImgDesktop.webp)] bg-contain bg-no-repeat bg-center" > </div>

      </div>
    </div>
  )
}

export default HeroAr