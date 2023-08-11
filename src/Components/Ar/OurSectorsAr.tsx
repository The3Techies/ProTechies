const sectors = ["البيع بالتجزئة والتجارة الإلكترونية", "التعليم والتعلم عن بُعد", "الرعاية الصحية واللياقة البدنية", "العقارات", "المأكولات والمطاعم", "حلول فورية حسب الطلب"]

const sectorsHtml = sectors.map((sector, index) => (
  <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] md:w-[15%] w-[45%] aspect-square flex flex-col items-center p-2 pb-4 mb-6">
    <img src={`/OurSectorsImgs/sector${index + 1}.webp`} alt={`sector${index + 1} img`} className="mb-6 h-[80px] w-[80px] " />
    <h1 className="text-[#FFF] font-bold md:text-xl 2xl:text-2xl text-center">{sector}</h1>

  </div>
));

const OurSectorsAr: React.FC = () => {
  return (
    <div className="bg-[#334A5C] w-full flex justify-around pt-6" >
      <div className="w-[90%] 2xl:w-[70%] " dir="rtl">

        <h1 className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-r-[5px] border-[#00DFC0] pr-4 mb-4">نخدم جميع القطاعات</h1>
        <p className="text-[#FFF] text-sm md:text-base 2xl:text-lg pl-4 mb-8">في <span className="text-[#00DFC0] font-bold">بروتيكيز</span>، نفخر بقدرتنا على تطوير التطبيقات لمجموعة واسعة من الصناعات. بغض النظر عن قطاعك الصناعي، لدينا المهارات والخبرة لبناء التطبيق المثالي الذي يتناسب مع متطلباتك الخاصة. من الفكرة إلى التنفيذ، نحن هنا لتحويل رؤيتك إلى واقع.</p>

        <div className="flex flex-wrap justify-between ">
          {sectorsHtml}
        </div>
      </div>
    </div>
  )
}

export default OurSectorsAr