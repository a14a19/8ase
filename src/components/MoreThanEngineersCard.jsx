const MoreThanEngineersCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#0c0c0c] h-[800px] w-full rounded-3xl overflow-hidden pt-12 mx-4">
      <img src={image} alt="content" loading="lazy" className="pb-8" />
      <h2 className="text-white text-3xl xl:text-4xl uppercase font-[900] px-12 py-10 text-wrap">
        {title}
      </h2>
      <p className="text-gray-600 text-xl xl:text-2xl px-12 font-medium leading-normal">
        {description}
      </p>
    </div>
  )
}

export default MoreThanEngineersCard
