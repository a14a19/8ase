import React, { useState } from "react";
import { EmployeeReviewsData } from "../data/EmployeeReviews";

export default function EmployeeReviewCard() {
   const [currentSlide, setCurrentSlide] = useState(0);

   const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide > 0 ? prevSlide - 1 : EmployeeReviewsData.length - 1
      );
   };

   const handleNextSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide < EmployeeReviewsData.length - 1 ? prevSlide + 1 : 0
      );
   };

   return (
      <>
         <div className="flex space-x-4 h-[25rem] overflow-x-auto w-[140rem] m-4">
            <div className="flex flex-col">
               <div className="flex items-center p-6 text-3xl font-extrabold">
                  THE FUTURE <br /> OF WORK <br /> IS HERE.
               </div>
               <div className="flex justify-center space-x-2">
                  <button
                     className="border rounded-full p-4 bg-black text-white"
                     onClick={handlePrevSlide}
                  >
                     &larr;
                  </button>
                  <button
                     className="border rounded-full p-4 bg-black text-white"
                     onClick={handleNextSlide}
                  >
                     &rarr;
                  </button>
               </div>
            </div>
            <div className="relative w-[140rem] h-[25rem]">
               <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[calc(-100%*currentSlide)]">
                  {EmployeeReviewsData.map((data, index) => (
                     <div
                        key={index}
                        className={`flex flex-col border rounded-2xl p-6 w-[140rem] ${
                           index % 2 === 0
                              ? "bg-lightgreen text-darkgreen"
                              : "bg-darkgreen text-white"
                        }`}
                     >
                        <div class="flex">
                           {" "}
                           <svg
                              class="w-4 h-4 text-greenstar ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                           >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              class="w-4 h-4 text-greenstar ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                           >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              class="w-4 h-4 text-greenstar ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                           >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              class="w-4 h-4 text-greenstar ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                           >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              class="w-4 h-4 ms-1 text-greenstar"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                           >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                        </div>
                        <div className="flex text-2xl text-left mt-8">
                           {data.review}
                        </div>
                        <div className="flex flex-grow items-end">
                           <div className="mt-auto">
                              <p
                                 className={`border rounded-full p-2 pl-4 pr-4 ${
                                    index % 2 === 0
                                       ? "border-darkgreen"
                                       : "text-white"
                                 }`}
                              >
                                 {data.employee}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

// <div className="flex space-x-4 h-[25rem] overflow-x-auto w-[140rem] m-4">
//    <div className="flex items-center p-6 text-3xl font-extrabold w-[140rem]">
//       THE FUTURE <br /> OF WORK <br /> IS HERE.
//    </div>
//    {EmployeeReviewsData.map((data, index) => (
//       <div
//          className={`flex flex-col border rounded-2xl p-6 w-[140rem] ${
//             index % 2 === 0
//                ? "bg-lightgreen text-darkgreen"
//                : "bg-darkgreen text-white"
//          }`}
//          key={index}
//       >
//          <div class="flex">
//             <svg
//                class="w-4 h-4 text-greenstar ms-1"
//                aria-hidden="true"
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                viewBox="0 0 22 20"
//             >
//                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//                class="w-4 h-4 text-greenstar ms-1"
//                aria-hidden="true"
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                viewBox="0 0 22 20"
//             >
//                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//                class="w-4 h-4 text-greenstar ms-1"
//                aria-hidden="true"
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                viewBox="0 0 22 20"
//             >
//                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//                class="w-4 h-4 text-greenstar ms-1"
//                aria-hidden="true"
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                viewBox="0 0 22 20"
//             >
//                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//             <svg
//                class="w-4 h-4 ms-1 text-greenstar"
//                aria-hidden="true"
//                xmlns="http://www.w3.org/2000/svg"
//                fill="currentColor"
//                viewBox="0 0 22 20"
//             >
//                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//          </div>
//          <div className="flex text-2xl text-left mt-8">{data.review}</div>
//          <div className="flex flex-grow items-end">
//             <button className="mt-auto">
//                <p
//                   className={`border rounded-full p-2 pl-4 pr-4 ${
//                      index % 2 === 0 ? "border-darkgreen" : "text-white"
//                   }`}
//                >
//                   {data.employee}
//                </p>
//             </button>
//          </div>
//       </div>
//    ))}
// </div>;
