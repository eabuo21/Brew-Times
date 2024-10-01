import React from "react";
import Image from "next/image";

export default function MenuCards({ cards = [], title }) {
  return (
    <div className="w-full h-[fixed] flex flex-col justify-center items-center p-2  ">
      <h1 className="text-gray-800 font-thin text-4xl  md:text-5xl lg:text-7xl font-passion tracking-wider ">
        {title}
      </h1>
      <section className="w-full h-[fixed] justify-center items-center p-2  gap-y-5  mx-auto  grid grid-cols-1 md:grid-cols-2    ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-[fixed] justify-center items-center flex flex-col  px-2   mx-auto  "
          >
            <section className="flex flex-row justify-center items-center  p-2 gap-x-5  ">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={300}
                className=" w-[50px] h-[50px]    md:w-[100px] md:h-[100px]"
              />
              <div className="flex flex-col gap-y-5 justify-center items0center  p-2 w-full h-[fixed] ">
                <h3 className="text-gray-800  flex flex-row font-thin text-lg  md:text-xl lg:text-2xl font-passion tracking-wider ">
                  {card.title}................... {card.prize}
                </h3>
                <p className="text-gray-800 font-thin text-base  md:text-lg lg:text-xl font-passion tracking-wide ">
                  {card.description}
                </p>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}
