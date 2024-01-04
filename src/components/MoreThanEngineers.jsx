import MoreThanEngineersCard from "./MoreThanEngineersCard"
import { MoreThanEngineersData as data } from "../data/MoreThanEngineers"

const MoreThanEngineers = () => {
  return (
    <section className="w-full mb-20">
      <h1 className="text-center text-[#0c0c0c] text-[48px] xl:text-[68px] font-[900] my-16">
        MORE THAN JUST <span className="text-[#6052CD]">ENGINEERS</span>
        <span>.</span>
      </h1>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-center gap-6 px-8 md:px-24 lg:px-36 xl:px-52">
          {data.map((card) => (
            <MoreThanEngineersCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreThanEngineers
