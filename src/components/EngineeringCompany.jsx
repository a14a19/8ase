import gal1 from '../assets/Gr.webp';
import { Link } from 'react-router-dom';


function EngineeringCompany() {
  return (
    <div className="py-8">
      <div>
        <div className="font-['Inter'] tracking-tighter text-left md:text-center font-extrabold border-none text-5xl md:text-6xl mb-5 md:mb-10 px-4 md:px-10">
          <span className="text-[#44bb89]">GLASSDOOR'S MOST LOVED</span>
          <br />
          <span>ENGINEERING COMPANY</span>
        </div>
      </div>
      <div>
        <div className="flex md:flex-row flex-col-reverse px-4 lg:px-40">
          <div className="basis-1/2 mt-4 md:mt-0">
            <div className="font-[1000] text-4xl ">
              <h2>ENERGIZED COMMUNITY.</h2>
            </div>
            <div className=" mt-3 mb-4 text-[#808080]">
              <p>"We've spent 2 years crafting an unparalleled experience for our engineers, leading to 98% retention and high performance."</p>
              <p className="mt-5"> "Our thriving culture and continuous investment in our community ensures your team is driven, highly motivated, and ready to propel your projects forward."</p>
            </div>
            <div className="flex justify-center items-center md:justify-start md:items-start">
              <Link to="/HireXTeam">
                <button className="px-24 py-3 md:px-5 md:py-2 text-base md:text-lg text-white font-semibold bg-black rounded-full border border-black-200 hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-offset-2" >
                  <span>Hire 8ase-Team</span>
                </button>

              </Link>

            </div>

          </div>

          <div className="basis-2/3">
            <div className="md:shrink-0 flex items-center md:ml-12" >
              <img className="rounded-lg " src={gal1} alt="Energized Community" />
            </div>

          </div>

        </div>
      </div>

      <div className="basis-2/3">
        <div className="md:shrink-0 flex items-center md:ml-12">
          <img className="rounded-lg " src={gal1} alt="Energized Community" />
        </div>
      </div>
    </div>
  )
}
export default EngineeringCompany
