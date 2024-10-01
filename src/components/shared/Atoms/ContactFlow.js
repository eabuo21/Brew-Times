import React from "react";
import Buttons from "./Buttons";

export default function ContactFlow() {
  return (
    <div className="w-full h-[300px] bg-stone-500 flex flex-col gap-y-5 md:flex-row gap-x-6 justify-center items-center  px-3  md:px-[3rem]">
      <h1 className="text-gray-800 font-thin text-xl  md:text-2xl lg:text-4xl font-passion tracking-wider  text-center  md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </h1>

      <Buttons text="Contact us" link="/contact-us" />
    </div>
  );
}
