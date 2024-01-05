export default function ScaleYourTeam() {
   return (
      <>
         <div className="flex justify-center mt-16 mb-4 text-center sm:mt-48">
            <div className="text-4xl font-extrabold sm:text-6xl">
               SCALE YOUR TEAM <br /> WITH SENIOR ENGINEERS <br /> FOR{" "}
               <span className="text-greenstar">LASTING SUCCESS.</span>
            </div>
         </div>
         <div className="grid items-center w-full grid-cols-2 grid-rows-3 gap-x-4 gap-y-48 p-28">
            <div className="flex h-[25rem] w-full text-2xl font-medium">
               <div className="flex flex-col justify-center w-full p-12 text-greyscale">
                  <span className="text-4xl font-extrabold text-black">
                     FLEXIBLE SCALING.
                  </span>{" "}
                  <br /> Ramp your team up or down with on-demand engineers. We
                  make scaling simple with flexible contracts and monthly
                  billing.
                  <button className="w-1/2 p-4 mt-10 text-white bg-black border rounded-full">
                     HIRE 8ASE
                  </button>
               </div>
            </div>
            <div className="flex h-[25rem] w-full justify-center">
               <img className="w-full rounded-xl" src="/8ase.png" alt="Logo" />
            </div>
            <div className="flex h-[25rem] w-full justify-center">
               <img className="w-full rounded-xl" src="/8ase.png" alt="Logo" />
            </div>

            <div className="flex h-[25rem] w-full text-2xl font-medium">
               <div className="flex flex-col justify-center w-full p-12 text-greyscale">
                  <span className="text-4xl font-extrabold text-black">
                     PERFECT MATCHING.
                  </span>{" "}
                  <br /> X-Team ensures the ideal engineering match, culturally
                  and technically, through our rigorous vetting. Trust our
                  handpicked candidates and focus on what truly matters.
                  <button className="w-1/2 p-4 mt-10 text-white bg-black border rounded-full">
                     HIRE 8ASE
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
