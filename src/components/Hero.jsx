import { Link } from "react-router-dom";
import TopTechTools from "./TopTechTools";

export default function Hero({ title, subTitle, bgImg, clientTitle }) {
    return (
        <section className="mt-16 md:h-[1359px] md:text-center text-start bg-cover text-white" style={{ backgroundImage: `linear-gradient(rgba(12, 12, 12, 0.6) 21.84%, rgb(12, 12, 12) 71.03%), url(${bgImg})` }}>
            <div className="flex items-center flex-col justify-start pb-28 md:gap-[20rem] gap-[6rem] h-full lg:max-w-[65%] max-w-full mx-auto md:px-0 px-8">
                <div></div>
                <div className="flex flex-col gap-4">
                    <h1 className="md:text-7xl text-3xl font-black uppercase">{title}</h1>
                    <h3 className="md:text-2xl text-xl md:mx-20 mx-0">{subTitle}</h3>
                    <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
                        <Link to="/hire-8ase" className="uppercase bg-white hover:bg-[#ffffffbe] text-black border border-white px-20 py-4 rounded-[2rem] md:text-base text-sm text-center font-semibold md:w-[45%] w-full whitespace-nowrap ease-in-out duration-300">Hire 8ase</Link>
                        {/* <button className="uppercase bg-transparent hover:bg-[#ffffff10] text-white border border-white px-20 py-4 rounded-[2rem] md:text-base text-sm font-semibold md:w-[45%] w-full whitespace-nowrap ease-in-out duration-300">Learn more</button> */}
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-2xl font-bold text-[#8f8f8f] text-center">{clientTitle}</h3>
                    <TopTechTools />
                </div>
            </div>
        </section>
    )
}