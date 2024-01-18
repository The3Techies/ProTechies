import { useState, useEffect } from "react";

const AboutUsAr: React.FC = () => {
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
    <div className="bg-PrimaryBg w-full flex justify-around bg-right dir">
      <div id="AboutUs" className="w-[90%] 2xl:w-[70%]  flex lg:flex-row flex-col justify-between items-center py-6 gap-8 mb-10">

        <div className="lg:w-[48%] w-full h-full bg-SecondaryBg bg-opacity-[0.12] rounded-br-full items-center hidden lg:flex">
          <div
            className={`bg-[url(/AboutUsImgs/image1.webp)] w-full h-full bg-contain bg-no-repeat mt-48 mb-20 animate__animated ${isVisible ? 'animate__backInLeft' : ''
              } about-img`}
          ></div>
        </div>

        <div className="lg:w-[50%] text-right" dir="rtl">
          <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-r-[5px] border-Highlight lg:mt-0 mt-10 pr-4 mb-6 ">من نحن</h1>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">شغفنا بالابتكار</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">في <span className="text-Highlight font-bold">بروتيكيز</span>، نحن فريق من عشاق التقنية المتحمسين ملتزمين بدفع الابتكار الرقمي. تساعدنا الرؤية المشتركة على التقدم ونسعى لتقديم خدمات تطوير استثنائية تتجاوز الخيال وتحقق الأفكار.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">التفاني في التميز</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">التميز هو جوهر قيمنا. نحن مشوّقون بالإبداع وبسعي لتحقيق رضا العملاء بلا هوادة. التزامنا الثابت يدفعنا لاستكشاف حلول مبتكرة تدفع حدود ما هو ممكن في العالم الرقمي.</p>

          <h1 className="pl-4 font-bold text-xl 2xl:text-3xl text-[#FFF] mb-2">تجارب مُخصّصة للنجاح</h1>
          <p className="pl-4 text-[#FFF] mb-4 max-w-[95%] text-sm 2xl:text-lg">بنهج متمحور حول العميل، نحن نفخر بتقديم تجارب مُخصّصة تمكّن الشركات من الازدهار في المشهد الرقمي المتنوع. انضم إلينا في هذه الرحلة المثيرة حيث نشكل مستقبلاً رقمياً أكثر ازدهاراً بالتعاون. سوياً، دعونا نُفتح الإمكانات غير المحدودة للتكنولوجيا.</p>
        </div>


      </div>
    </div>
  )
}

export default AboutUsAr