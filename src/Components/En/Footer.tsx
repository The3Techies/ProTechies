
const Footer: React.FC = () => {
    return (
        <div className="bg-PrimaryBg w-full flex justify-around rounded-bl-xl rounded-br-xl" >
            <div className="w-[90%] 2xl:w-[70%] ">
                <div className="w-full h-[1.5px] bg-[#000] bg-opacity-30"></div>
                <h1 className=" text-center text-lg text-[#fff] p-4">Copyright © 2023 <span className=" text-Highlight font-bold">Protechies</span>.</h1>
            </div>
        </div>
    )
}

export default Footer