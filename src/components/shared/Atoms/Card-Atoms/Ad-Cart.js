import React from "react";
import Image from "next/image";

export default function AddToCart({ cards = [], className }) {
  return (
    <div
      className={`w-full h-[fixed] justify-center items-center p-2 flex flex-col   ${className}`}
    >
      <section className="image-title-text-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-y-[30px] gap-x-[40px] px-2 w-full  items-center  md:px-[5rem]  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" relative group  overflow-hidden flex flex-col justify-center items-center gap-y-5 w-full h-fixed]   "
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={500}
              className="w-[100px] h-[100px]   group-hover:blur transform duration-700 ease-in-out    md:w-[150px] md:h-[150px] "
            />
            <h3 className="text-gray-800 font-bold text-base  md:text-lg lg:text-2xl font-passion tracking-wider  text-center">
              {card.name}
            </h3>
            <p className="text-gray-800 font-thin text-base font-alexbrush md:text-lg   lg:text-lg  tracking-wide   text-center w-[250px]  md:w-full ">
              {card.prize}
            </p>
            <div
              className="absolute  transform duration-700 ease-in-out mx-auto top-[2.5rem] bottom-[5rem] left-[2rem] right-[2rem]   flex justify-center items-center  opacity-0 
            group-hover:opacity-100 group-hover:duration-700 group-hover:ease-in-out w-[130px] h-[50px] p-3  bg-stone-700  hover:bg-black hover:text-white  text-white  "
            >
              {card.adtext}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
