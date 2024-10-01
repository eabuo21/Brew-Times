import React from "react";
import Image from "next/image";

export default function SubHeros({ items = [], className, text_className, image_className }) {
  return (
    <div
      className={`w-full h-[fixed] justify-center items-start  flex  flex-col p-2 ${className} `}
    >
      <section className="w-full h-[fixed] justify-center items-center  p-1 flex flex-col gap-y-5 ">
        {items.map((item, index) => (
          <div
            key={index}
            className=" title-image-text-container w-full flex flex-col gap-y-5 justify-center items-center  p-1  "
          >
            <h1 className="text-gray-800 font-thin text-4xl  md:text-5xl lg:text-7xl font-passion tracking-wider ">
              {item.title}
            </h1>
            <Image
              src={item.image}
              width={400}
              height={400}
              alt={item.title}
              className={`w-[200px] h-[40px] object-fill  ${image_className}`}
            />
            <p className={` ${text_className} text-gray-800 font-thin text-base font-alexbrush md:text-lg   lg:text-lg  tracking-wide  w-[90%] md:w-[70%] text-center `}>
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
