import { Link } from "react-router-dom";

export default function ScaleYourTeam() {
   return (
      <>
         <div className="justify-center mt-16 mb-4 text-center sm:flex sm:mt-48">
            <div className="text-2xl font-extrabold md:text-6xl sm:text-4xl">
               SCALE YOUR TEAM <br /> WITH SENIOR ENGINEERS <br /> FOR{" "}
               <span className="text-greenstar">LASTING SUCCESS.</span>
            </div>
         </div>
         {/* grid-rows-2 sm:grid-cols-2 sm:grid gap-x-4 gap-y-48 */}
         <div className="flex flex-col items-center w-full gap-y-14 md:p-28">
            <div className="flex lg:flex-row flex-col-reverse">
               <div className="flex w-full text-lg sm:text-2xl font-medium">
                  <div className="flex flex-col justify-center w-full p-12 text-greyscale">
                     <span className="text-4xl font-extrabold text-black">
                        FLEXIBLE SCALING.
                     </span>{" "}
                     <br />
                     <p className="text-lg">Effortlessly expand or contract your team with flexible
                        engineers. Simplify scaling through adaptable contracts and
                        monthly billing.</p>
                     <Link to="/hire-8ase">
                        <button className="w-1/2 p-4 mt-10 text-lg text-white bg-black border rounded-full">
                           HIRE 8ASE
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="flex md:w-full w-[90%] rounded-xl overflow-hidden justify-center mx-auto">
                  <img
                     className="h-full  rounded-xl"
                     src="/flexible-scaling.png"
                     alt="Three People on Computer"
                  />
               </div>
            </div>
            <div className="flex lg:flex-row flex-col">
               <div className="flex w-full justify-center">
                  <img
                     className="h-full rounded-xl"
                     src="/people-computers.png"
                     alt="People and Computers"
                  />
               </div>

               <div className="flex w-full text-2xl font-medium">
                  <div className="flex flex-col justify-center h-full px-12 py-8 text-greyscale">
                     <span className="text-4xl font-extrabold text-black">
                        PERFECT MATCHING.
                     </span>{" "}
                     <br />
                     <p className="text-lg">Discover 8ase – Building Your Dream Team, Your Way! Our careful selection process ensures you get team members who fit right in with your vibe and skills needs. Count on our chosen talents, so you can focus on what really makes your success happen.</p>
                     <Link to="/hire-8ase">
                        <button className="w-1/2 p-4 mt-10 text-lg text-white bg-black border rounded-full">
                           HIRE 8ASE
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
