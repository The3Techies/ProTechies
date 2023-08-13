interface SectionData {
  name: string;
  discretion: string;
}

const process: SectionData[] = [
  {
    name: "1. جمع المتطلبات",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "2. تصميم واجهة المستخدم وتجربة المستخدم",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "3. نموذج تجريبي",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "4. التطوير",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "5. ضمان الجودة",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "6. النشر",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
  {
    name: "7. الدعم والصيانة",
    discretion: "نتبع أولوية جمع المتطلبات والموارد والمعلومات كخطوة أولى وأساسية لبدء مشروعنا."
  },
];


const processHtml = process.map((section, index) => (
  <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] lg:w-[24%] md:w-[46%] aspect-square flex flex-col items-center  px-2 py-6 ">

    <img src={`/OurProcessImgs/proces${index + 1}.webp`} alt={`proces${index + 1} img`} className="w-[100px] h-[100px] mb-4 " />
    <h1 className="text-[#FFF] font-bold md:text-2xl 2xl:text-4xl text-lg text-center mb-4 ">{section.name}</h1>
    <p className="text-[#FFF] text-base 2xl:text-lg text-center p-2">{section.discretion}</p>

  </div>
))

const OurProcessAr: React.FC = () => {
  return (
    <div className="bg-[#334A5C] w-full flex justify-around pt-12 " >
      <div className="w-[90%] 2xl:w-[70%] mb-6" dir="rtl">

        <h1 className="text-[#FFF] font-bold text-3xl md:text-4xl 2xl:text-6xl border-r-[5px] border-[#00DFC0] pr-4 mb-10">العمليات التي نتبعها</h1>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-y-6 lg:gap-8 justify-between">
          {processHtml[0]}
          {processHtml[1]}
          {processHtml[2]}
          {processHtml[3]}
        </div>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-y-6 lg:gap-x-10 md:justify-between lg:justify-center mt-6">
          {processHtml[4]}
          {processHtml[5]}
          {processHtml[6]}
        </div>

      </div>
    </div>
  )
}

export default OurProcessAr