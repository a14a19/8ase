export default function ScaleYourTeam() {
   return (
      <>
         <div className="justify-center mt-16 mb-4 text-center sm:flex sm:mt-48">
            <div className="text-5xl font-extrabold sm:text-6xl">
               SCALE YOUR TEAM <br /> WITH SENIOR ENGINEERS <br /> FOR{" "}
               <span className="text-greenstar">LASTING SUCCESS.</span>
            </div>
         </div>
         <div className="flex flex-col items-center w-full grid-rows-2 sm:grid-cols-2 sm:grid gap-x-4 gap-y-48 sm:p-28">
            <div className="flex h-[25rem] w-full text-lg sm:text-2xl font-medium">
               <div className="flex flex-col justify-center w-full p-12 text-greyscale">
                  <span className="text-4xl font-extrabold text-black">
                     FLEXIBLE SCALING.
                  </span>{" "}
                  <br /> Effortlessly expand or contract your team with flexible
                  engineers. Simplify scaling through adaptable contracts and
                  monthly billing.
                  <button className="w-1/2 p-4 mt-10 text-white bg-black border rounded-full">
                     HIRE 8ASE
                  </button>
               </div>
            </div>
            <div className="flex h-[25rem] w-full justify-center">
               <img
                  className="w-full rounded-xl"
                  src="/flexible-scaling.png"
                  alt="Three People on Computer"
               />
            </div>
            <div className="flex h-[25rem] w-full justify-center">
               <img
                  className="w-full rounded-xl"
                  src="/people-computers.png"
                  alt="People and Computers"
               />
            </div>

            <div className="flex h-[25rem] w-full text-2xl font-medium">
               <div className="flex flex-col justify-center w-full p-12 text-greyscale">
                  <span className="text-4xl font-extrabold text-black">
                     PERFECT MATCHING.
                  </span>{" "}
                  <br />
                  Welcome to 8ase – Crafting Engineering Synergy Tailored Just
                  for You! Immerse yourself in the assurance of our meticulous
                  vetting process, guaranteeing candidates who align seamlessly
                  with your culture and technical needs. Rely on our curated
                  talent pool, allowing you to concentrate on what truly drives
                  your success.
                  <button className="w-1/2 p-4 mt-10 text-white bg-black border rounded-full">
                     HIRE 8ASE
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
