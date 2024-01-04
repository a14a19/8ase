export default function ScaleYourTeam() {
   return (
      <>
         <div className="flex justify-center mb-4 text-center border">
            <div className="text-6xl font-extrabold">
               SCALE YOUR TEAM <br /> WITH SENIOR ENGINEERS <br /> FOR{" "}
               <span className="text-greenstar">LASTING SUCCESS.</span>
            </div>
         </div>
         <div className="grid items-center w-full grid-cols-2 grid-rows-3 gap-8 border p-28">
            <div className="flex border h-[25rem] justify-center w-[70%] text-2xl font-medium">
               <div className="flex flex-col justify-center w-full p-12 border text-greyscale">
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
            <div className="flex border h-[25rem] w-full justify-center">
               <img className="w-full rounded-xl" src="/8ase.png" alt="Logo" />
            </div>
            <div className="grid grid-cols-2 border">hey</div>
            <div className="grid grid-cols-2 border">hello</div>
         </div>
      </>
   );
}
