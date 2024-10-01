import React from "react";
import Buttons from "./Buttons";

export default function ContactFlow() {
  return (
    <div className="w-full h-[300px] bg-stone-300 flex flex-col gap-y-5 md:flex-row gap-x-6 justify-center items-center  px-3  md:px-[3rem]">
      <h1 className="text-gray-800 font-normal text-xl  md:text-2xl lg:text-4xl font-lato tracking-wider  text-center  md:text-left">
        Need assistance or have a brew inquiry? Reach out to us!
      </h1>

      <Buttons text="Contact us" link="/contact-us" />
    </div>
  );
}
