const MoreThanEngineersCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#0c0c0c] h-[700px] md:h-[780px] w-full rounded-3xl pt-12 mx-0 min-[375px]:mx-4">
      <img src={image} alt="content" loading="lazy" className="pb-8" />
      <h2 className="text-white text-2xl md:text-3xl xl:text-4xl uppercase font-[900] px-12 py-6">
        {title}
      </h2>
      <p className="text-gray-600 text-xl xl:text-2xl mx-12 font-medium leading-normal text-wrap">
        {description}
      </p>
    </div>
  )
}

export default MoreThanEngineersCard
