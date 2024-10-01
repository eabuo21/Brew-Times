import React from "react";
import CountUp from 'react-countup';

export default function Counters({counters_cards = []}) {
  return (
    <div className="w-full  h-[fixed] flex flex-col gap-y-5 justify-center items-center p-2  relative bottom-[5rem] ">
      <section className="items-container grid grid-cols-1 gap-y-[30px] gap-x-8   md:grid-cols-4 justify-center items-center  p-2  px-2  md:px-[3rem]">
        {counters_cards.map((card, index) => (
          <div
            key={index}
            className="w-full has-[fixed] justify-center items-center flex flex-col gap-y-5 0-1"
          >
            <CountUp
              start={0}
              end={card.value}
              duration={50}
              separator=","
              useEasing={true}
              className="font-extralight  font-bigshoulders text-2xl  md:text-4xl lg:text-6xl text-center text-stone-600"
            />
            <h3 className="text-gray-800 font-thin text-xl  md:text-2xl lg:text-3xl font-passion tracking-wider  text-center">
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
