import React from "react";
import Link from "next/link";

export default function HeadingWithContent({ items = [], className }) {
  return (
    <div className="w-full h-[fixed] p-2 justify-center items-start  flex flex-col ">
      <section className="big-heading-description-text-container  w-full h-[fixed] flex flex-col gap-y-5 justify-start items-start ">
        {items.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col gap-y-5 justify-start items-start  "
          >
            <h1 className="text-white font-medium text-5xl  md:text-6xl lg:text-7xl font-lato tracking-wider ">
              {item.heading}
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-normal font-serif">
              {item.description}
            </p>
            <Link
              href={item.route}
              className="text-white font-serif text-lg md:text-xl lg:text-2xl flex justify-center  gap-x-3  "
            >
              <button className="w-60 h-[70px]   transform ease-in-out duration-700  hover:bg-white hover:text-black    flex justify-center items-center   border border-white   text-white text-xl  font-serif ">
                {item.route_name} &rarr;
              </button>
              
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
