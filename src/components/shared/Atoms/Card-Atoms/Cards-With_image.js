import React from "react";
import Image from "next/image";

export default function CardsWithImage({ cards = [], className }) {
  return (
    <div
      className={`w-full h-[fixed] justify-center items-center p-2 flex flex-col   ${className}`}
    >
      <section className="image-title-text-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-y-[30px] gap-x-[40px] px-2 w-full  items-center  md:px-[5rem]  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-y-5 w-full h-fixed]   "
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={500}
              className="w-[70px] h-[70px] "
            />
            <h3 className="text-gray-800 font-thin text-xl  md:text-2xl lg:text-3xl font-passion tracking-wider ">
              {card.title}
            </h3>
            <p className="text-gray-800 font-thin text-base font-alexbrush md:text-lg   lg:text-lg  tracking-wide   text-center w-[250px]  md:w-full ">
              {card.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
