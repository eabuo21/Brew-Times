import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cards2({ cards = [], className }) {
  return (
    <div
      className={` ${className} w-full h-[fixed] md:h-[600px] p-2 pb-2  justify-center items0center flex flex-col `}
    >
      <section className="grid grid-cols-1  md:grid-cols-3 w-full h-[fixed] justify-center  items-center p-1 px-2  gap-x-[50px] gap-y-[30px] md:px-[3rem]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-[fixed] overflow-hidden  justify-center items-start  flex flex-col gap-y-5 "
          >
            <Image
              src={card.image}
              width={500}
              height={500}
              alt={card.name}
              className="w-auto h-auto object-cover object-center hover:scale-105 duration-700 transform ease-in-out hover:transform hover:duration-700 hover:ease-in-out "
            />
            <Link href={card.route}>
              <h3 className="text-gray-800 font-medium text-xl  md:text-2xl lg:text-3xl font-lato tracking-wider hover-line">
                {card.title}
              </h3>
            </Link>
            <p className="text-gray-800 font-normal hover:underline text-base font-serif md:text-lg   lg:text-lg  tracking-wide    ">
              {card.text}
            </p>
            <Link href={card.link} className="">
              <h3 className="  text-gray-800 font-normal text-base  md:text-lg lg:text-xl font-serif tracking-wider flex  gap-x-2  ">
                {card.link_text} &rarr;
              </h3>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
